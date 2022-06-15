import React from "react";
import Description from "./ProductDetails/Description";
import Button from "./ProductDetails/Button";
import Price from "./ProductDetails/Price";

function Body() {
  return (
    <section>
      <div className="row">
        <div className="col">s dfgtgdrer</div>
        <div className="col">
          <Description />
          <Price />
          <Button />
        </div>
      </div>
    </section>
  );
}

export default Body;
