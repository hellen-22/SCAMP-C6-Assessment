import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { ReactComponent as IconCart } from "../images/icon-cart.svg";
import { ReactComponent as IconMenu } from "../images/icon-menu.svg";
import { ReactComponent as IconClose } from "../images/icon-close.svg";
import "./../css/Header.css";
import Cart from "./Cart";

function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleState, setToggleState] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const toggleCart = () => setDisplayCart(!displayCart);
  const toggleNav = () => setToggleState(!toggleState);

  function showCart() {
    if (toggleCart) {
      return <Cart />;
    }
  }
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [quantity]);

  return (
    <>
      <div className="navbar">
        <div className="navbar-icon" onClick={toggleNav}>
          {toggleState ? <IconClose /> : <IconMenu />}
        </div>
        <div className="navbar-nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div
          className={`${
            screenWidth <= 950
              ? "navbar-nav-links-container mobile"
              : "navbar-nav-links-container"
          } ${toggleState ? "active" : ""}`}
        >
          <p>
            <a href="#collections">Collections</a>
          </p>
          <p>
            <a href="#men">Men</a>
          </p>
          <p>
            <a href="#women">Women</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
        <>{displayCart ? showCart() : ""}</>
        <div className="navbar-cart-avatar">
          <IconCart
            className="navbar-cart"
            fill="#69707D"
            fillRule="nonzero"
            onClick={toggleCart}
          />
          <img src={avatar} alt="avatar" className="navbar-avatar" />
        </div>
      </div>
      <div className="navbar-border"></div>
    </>
  );
}

export default Header;
