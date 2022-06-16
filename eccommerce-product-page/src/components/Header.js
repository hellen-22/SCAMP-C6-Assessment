import React from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import "./../css/Header.css";

function Header() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-icon"></div>
        <div className="navbar-nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-nav-links-container">
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
        <div className="navbar-cart-avatar">
          <Cart 
            className="navbar-cart"
            fill="#69707D"
            fill-rule="nonzero"
          />
          <img src={avatar} alt="avatar" className="navbar-avatar"/>
        </div>
      </div>
      <div className="navbar-border"></div>
    </>
  );
}

export default Header;
