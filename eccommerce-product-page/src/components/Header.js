import React from "react";
import "./../css/style.css";
import logo from "./../images/logo.svg";
import cart from "./../images/icon-cart.svg";
import avatar from "./../images/image-avatar.png";
import menu from "./../images/icon-menu.svg";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <img src={menu}></img>
          </span>
        </button>
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img src={logo} height="15" alt="Sneakers Logo" loading="lazy" />
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Collection
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Men
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Women
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div class="d-flex align-items-center">
          <div class="p-3">
            <a>
              <img src={cart} alt="Cart Icon" loading="lazy"></img>
            </a>
          </div>

          <div class="dropdown">
            <a>
              <img
                src={avatar}
                class="rounded-circle"
                height="50"
                alt="Avatar"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
