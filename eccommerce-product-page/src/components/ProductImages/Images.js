import React from "react";

export const imgs = [
  {
    id: 1,
    class: "first-img",
    bg: `image-product-1-thumbnail.jpg`,
  },
  {
    id: 2,
    class: "two-img",
    bg: `image-product-2-thumbnail.jpg`,
  },
  {
    id: 3,
    class: "three-img",
    bg: `image-product-1-thumbnail.jpg`,
  },
  {
    id: 4,
    class: "four-img",
    bg: `image-product-1-thumbnail.jpg`,
  },
];

function Images() {
  return (
    <div className="image-container">
      {imgs.map((img, index) => {
        return (
          <div
            key={index}
            className={img.class}
            src={require(`./../../images/${img.bg}`)}
            alt="product-image"
          ></div>
        );
      })}
    </div>
  );
}

export default Images;
