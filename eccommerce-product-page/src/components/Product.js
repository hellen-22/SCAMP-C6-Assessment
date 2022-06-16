import React, { useState, useEffect } from "react";
import image1 from "./../images/image-product-1.jpg";
import image2 from "./../images/image-product-2.jpg";
import image3 from "./../images/image-product-3.jpg";
import image4 from "./../images/image-product-4.jpg";
import smallImage1 from "./../images/image-product-1-thumbnail.jpg";
import smallImage2 from "./../images/image-product-2-thumbnail.jpg";
import smallImage3 from "./../images/image-product-3-thumbnail.jpg";
import smallImage4 from "./../images/image-product-4-thumbnail.jpg";
import { ReactComponent as Minus } from "./../images/icon-minus.svg";
import { ReactComponent as Plus } from "./../images/icon-plus.svg";
import Cart from "./Cart";
import "./../css/Product.css";
import ImageSlider from "./ImageSlider";

function Product() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [quantity, setQuantity] = useState(0);
  const [displayPhoto, setDisplayPhoto] = useState(image1);
  const [count, setCount] = useState(0);

  function changeDisplayPhoto(image) {
    setDisplayPhoto(image);
  }
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    const changeHeight = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", changeWidth);
    window.addEventListener("resize", changeHeight);

    return () => {
      window.removeEventListener("resize", changeWidth);
      window.removeEventListener("resize", changeHeight);
    };
  }, [quantity]);

  return (
    <div className="product">
      <div className="product-images-container">
        <div className="product-main-image-container">
          {screenWidth <= 880 || screenHeight <= 700 ? (
            <ImageSlider
              images={{ image1, image2, image3, image4 }}
              className="hero__image-slider"
            />
          ) : (
            <>
              <img src={displayPhoto}></img>
            </>
          )}
          <div className="product-image-thumbnail-container">
            <div
              className={
                image1 === displayPhoto ? "product-image-thumbnail--active" : ""
              }
            >
              <img
                src={smallImage1}
                onClick={() => changeDisplayPhoto(image1)}
              />
            </div>

            <div
              className={
                image2 === displayPhoto ? "product-image-thumbnail--active" : ""
              }
            >
              <img
                src={smallImage2}
                onClick={() => changeDisplayPhoto(image2)}
              />
            </div>

            <div
              className={
                image3 === displayPhoto ? "product-image-thumbnail--active" : ""
              }
            >
              <img
                src={smallImage3}
                onClick={() => changeDisplayPhoto(image3)}
              />
            </div>

            <div
              className={
                image4 === displayPhoto ? "product-image-thumbnail--active" : ""
              }
            >
              <img
                src={smallImage4}
                onClick={() => changeDisplayPhoto(image4)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="product-content-container">
        <h5 className="product-content-container_company">SNEAKER COMPANY</h5>
        <h3 className="product-content-container_sneaker-name">
          Fall Limited Edition Sneakers
        </h3>
        <p className="product-content-container_description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand eveything the
          weather can offer.
        </p>
        <div className="product-price-container">
          {/*<div className="product-price">*/}
          <h2 className="product-price-container_child price">$125.00</h2>
          <p className="product-price-container_child discount">50%</p>
          {/*</div>*/}
          <div className="product-price-container_child prev-price">
            <p>$250.00</p>
          </div>
        </div>
        <div className="product-add-to-cart-container">
          <div className="product-qty-selector-container">
            <div className="product-qty-selector minus">
              <Minus onClick={() => setCount(count - 1)} />
            </div>
            <p>{count}</p>
            <div className="product-qty-selector plus">
              <Plus onClick={() => setCount(count + 1)} />
            </div>
          </div>
          <button className="product-add-to-cart">
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
