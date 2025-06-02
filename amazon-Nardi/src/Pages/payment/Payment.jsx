import React, { useContext, useState } from 'react';
import classes from './Payment.module.css';
import Layout from '../../components/LayOut/Layout';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/product/ProductCard';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/currencyformat/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
import { ClipLoader } from "react-spinners";

import { db } from '../../utility/firebase';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../utility/action.type';

function Payment() {
  const [{ user, basket },dispatch] = useContext(DataContext);
  const totalItems = basket?.reduce((amount, items) => items.amount + amount, 0);
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const total = basket?.reduce((amount, item) => amount + item.price * (item.amount || 1), 0);

  const handleChange = (e) => {
    e?.error?.message ? setCardError(e.error.message) : setCardError('');
  };
  const handlePayment = async (e) => {
    e.preventDefault();
  
    if (!user) {
      setCardError("Please sign in to complete your payment.");
      return;
    }
  
    if (!stripe || !elements) {
      setCardError("Payment system is not ready. Please refresh and try again.");
      setProcessing(false)
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setCardError("Card input not ready. Please try again.");
      return;
    }
  
    try {
      setProcessing(true);
      setCardError(null);
  
      const response = await axiosInstance({
        method: 'POST',
        url: `/payment/create?total=${total * 100}`,
      });
  
      const clientSecret = response.data?.clientSecret;
      if (!clientSecret) {
        setCardError("Could not get payment token from server.");
        setProcessing(false);
        return;
      }
  
      const confirmation = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email: user?.email || 'guest@example.com',
            name: 'Guest User',
          },
        },
      });
  
      if (confirmation.error) {
        setCardError(confirmation.error.message);
        setProcessing(false);
        return;
      }
  
      if (confirmation.paymentIntent.status === 'succeeded') {
        const paymentIntent = confirmation.paymentIntent;
  
        await db.collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

          // basket empty
  
dispatch({type:Type.EMPTY_BASKET})
  
        setProcessing(false);
        navigate("/orders/", { state: { msg: "you have placed new orders" } });
      }
  
    } catch (error) {
      console.error('Payment error:', error);
      setCardError('Payment failed. Please try again.');
      setProcessing(false);
    }
  };
  
  
  return (
    <Layout>
      <div className={classes.payment_header}>checkout({totalItems}) items</div>
      <section className={classes.Payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 react lane</div>
            <div>newyork,It</div>
          </div>
        </div>
        <hr />

        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((items) => (
              <ProductCard key={items.id} product={items} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {cardError && <small style={{ color: 'red' }}>{cardError}</small>}
                <CardElement
                   onChange={handleChange}
                  options={{
                    hidePostalCode: false,
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': { color: '#aab7c4' },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                  }}
                />

                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: 'flex', gap: '10px' }}>
                      <p>Total order</p>
                      <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit" 
                  // disabled={processing || !stripe || !elements}
                  
                  >
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
