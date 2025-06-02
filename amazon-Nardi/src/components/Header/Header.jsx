import React, { useContext } from 'react';
import classes from "../Header/Header.module.css";
import {Link} from 'react-router-dom'; 
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
 import{auth} from "../../utility/firebase"

 function Header() {
 const [{user,basket},dispatch]=useContext(DataContext)
const totalItems =basket?.reduce((amount,items)=>{
  return items.amount+amount 
},0);

  return (
    <section  className={classes.fixed}  >
    <section>
      <div className={classes.Header_container}>
        {/* Logo Section */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
        </div>

        {/* Delivery Section */}
        <div className={classes.delivery}>
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        {/* Search Section */}
        <div className={classes.search}>
          <select name="category" id="category">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <BsSearch size={38} />
        </div>

        {/* Language and Flag Section */}
        <div  className={classes.language}>
          <Link to="/"   >
            <img src="https://flagcdn.com/us.svg" alt="US Flag" />
            <select name="lang" id="lang">
              <option value="">EN</option>
            </select>
          </Link>
        </div>

        {/* Account Section */}
        <div className={classes.account}>
          <Link to={!user &&"/auth"}>
<div>
{ user? (
<>
  <p>Hello,{user?.email?.split("@")[0]}</p>
    <span onClick={(()=>auth.signOut())}    >Sign out</span>
    {/* 20.55time sign out loading and error state*/}
    </>
):(
<>
<p>Hello, sign In</p>
<span>Account & Lists</span>
</>
)}
</div>
  </Link>
        </div>

        {/* Orders Section */}
        <div className={classes.orders}>
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
        </div>

        {/* Cart Section */}
        <div className={classes.cart}>
          <Link to="/cart">
            <BiCart size={35} />
            <span>{totalItems}</span>
          </Link>
        </div>
      </div>
    </section>

 <LowerHeader/>
  
</section>

  );
};

export default Header; 