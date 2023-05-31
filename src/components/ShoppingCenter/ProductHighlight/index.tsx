import React from "react";

import Item from "./BenefitItem";

import { Button } from "components";
import { useWindowDimensions } from "utils/window";

import productHighlight from "assets/img/product-highlight.png";

import "./styles.scss";

const ProductHighlight = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className="product-highlight">
      <div className="content flex">
        <div className="left flex column">
          <div className="title">Clean and fragrant soy wax</div>
          <div className="quote">Made for your home and for your wellness</div>
          {isMobile && (
            <div className="img-wrapper">
              <img src={productHighlight} alt="productHighlight" />
            </div>
          )}
          <div className="benefit flex column">
            <Item benefit="Eco-sustainable:All recyclable materials, 0% CO2 emissions" />
            <Item benefit="Hyphoallergenic: 100% natural, human friendly ingredients " />
            <Item benefit="Handmade: All candles are craftly made with love" />
            <Item benefit="Long burning: No more waste. Created for last long" />
          </div>
          <div className="button-wrapper">
            <Button name="View product" onClick={() => {}} />
          </div>
        </div>
        {!isMobile && (
          <div className="right flex">
            <img src={productHighlight} alt="productHighlight" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductHighlight;
