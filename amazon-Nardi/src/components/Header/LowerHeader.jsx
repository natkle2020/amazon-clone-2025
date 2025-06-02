import React from "react";
import { IoIosMenu } from "react-icons/io";
import styles from "./LowerHeader.module.css"; // ✅ make sure this file exists

function LowerHeader() {
  return (
    <div className={styles.LowerHeader}>
      <ul>
        <li><IoIosMenu /> All</li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;

