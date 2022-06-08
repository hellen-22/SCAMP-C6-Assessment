import React from "react";

function Headeeer() {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-md justify-content-md-center justify-content-start">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <h4 class="p-4">SNEAKERS</h4>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  Collections
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
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div class="" id="collapsingNavbar2">
            <ul class="nav navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Collections
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Collections
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Headeeer;
