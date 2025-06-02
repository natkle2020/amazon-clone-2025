import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Payment from './Pages/payment/Payment';
// import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Category from './components/Category/Category';
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import OrdersPage from "./Pages/Orders/Orders"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
const stripePromise = loadStripe('pk_test_51RU7HiRtvErtaZw7foAlailFXCq8uW43FqVZFyiObxWNmHow1C4n70P3AfK3VrNaNIXqOqz4gcaiRsxADZLznyfC00AMw0zr7T');


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/payment" 
      element={ 
      <ProtectedRoute 
      msg={"you must log in to pay"} redirect={"/payment"} >


<Elements stripe={stripePromise}>
         <Payment />
         </Elements>
        
      </ProtectedRoute>     

       } 
       />
      <Route path="/orders" element={ 

<ProtectedRoute 
msg={"you must log in to see your orders"} 
redirect={"/orders"} >

<OrdersPage />

</ProtectedRoute>

} />
      <Route path="/category/:categoryName" element={<Results/>}/>
      <Route path ="/products/:productId"element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Routing;
