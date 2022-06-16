import React, { useState } from "react";
import smallImage1 from "./../images/image-product-1-thumbnail.jpg";
import { ReactComponent as Delete } from "./../images/icon-delete.svg";
import "./../css/Header.css";

function Cart() {
  const [cartQuantity, setCartQuantity] = useState(0);


  return (
    <div className="navbar-cart--active">
      <div className="navbar-cart-title">
        <h4>Cart</h4>
      </div>
      <div className="navbar-cart-display">
        {cartQuantity === 0 ? (
          <div className="navbar-cart--show_empty">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="navbar-cart--show_full">
            <div className="navbar-cart-content">
              <img src={smallImage1} className="navbar-cart-image"></img>
              <div className="navbar-cart-item-description">
                <p className="navbar-cart-item">
                  Fall Limited Edition Sneakers
                </p>
                <p className="navbar-cart-total-cost">
                  $125.00 x 6 <b>${125 * 6}.00</b>
                </p>
              </div>
              <Delete className="navbar-cart-delete" />
            </div>

            <div className="navbar-cart-checkout-button-container">
              <button className="navbar-cart-checkout-button">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
