import React, { useState } from "react";
import image1 from "./../images/image-product-1.jpg";
import image2 from "./../images/image-product-2.jpg";
import image3 from "./../images/image-product-3.jpg";
import image4 from "./../images/image-product-4.jpg";
import "./../css/ImageSlider.css";
import { ReactComponent as IconPrevious } from "./../images/icon-previous.svg";
import { ReactComponent as IconNext } from "./../images/icon-next.svg";

function ImageSlider() {
  const slides = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? 3 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <section className="slider">
      <IconPrevious className="previous" onClick={prevSlide} />
      <IconNext className="next" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="sneakers" className="slider-image" />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ImageSlider;
