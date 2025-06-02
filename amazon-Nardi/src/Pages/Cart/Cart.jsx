import React, { useContext } from 'react';
import styles from './Cart.module.css'; 
import Layout from '../../components/LayOut/Layout';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/product/ProductCard';
import CurrencyFormat from '../../components/currencyformat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from '../../utility/action.type';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, items) => {
    return items.price * items.amount + amount;
  }, 0);

  const increment = (items) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      items
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    });
  };

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.cart__container}>
          <h2>Hello {user?.name || "Guest"}</h2>
          <h2>Your Shopping Basket</h2>
          <hr />
          {
            basket?.length === 0 ? (
              <p>Oops! No items in your Cart.</p>
            ) : (
              basket.map((items, i) => (
                <section key={i} className={styles.cart_product}>
                  <ProductCard
                    product={items}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />

                  <div className={styles.btn_container}>
                    <button className={styles.btn} onClick={() => increment(items)}>
                      <IoIosArrowUp size={20} />
                    </button>
                    <span>{items.amount}</span>
                    <button className={styles.btn} onClick={() => decrement(items.id)}>
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
                </section>
              ))
            )
          }
        </div>

        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">Continue to Checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
