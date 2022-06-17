import React, { useState } from "react";
import "./../css/Header.css";

function Cart() {

  return (
    <div className="navbar-cart--active">
      <div className="navbar-cart-title">
        <h4>Cart</h4>
      </div>
      <div className="navbar-cart-display">
          <div className="navbar-cart--show_empty">
            <p>Your cart is empty.</p>
          </div>
      </div>
    </div>
  );
}

export default Cart;
