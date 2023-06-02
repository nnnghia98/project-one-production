import React from "react";

import { Button } from "components";

import { useWindowDimensions } from "utils/window";

import productBanner from "assets/img/product-banner.png";

import "./styles.scss";

const renderMobileView = () => (
  <div className="mobile">
    <div className="name">New Candle</div>
    <div className="img-wrapper">
      <img src={productBanner} alt="productBanner" />
    </div>
    <div className="button-group flex">
      <Button name="Quantity" onClick={() => {}} outerClassName="stock" />
      <div className="cost">$9.99</div>
    </div>
    <div className="in-stock">In stock: 20</div>
    <Button
      name="Add to cart"
      onClick={() => {}}
      outerClassName="add-to-cart"
    />
    <div className="properties flex column">
      <div className="property flex">
        <div className="bold">Wax:</div>
        {` Top grade Soy wax that delivers a smoke less, consistent burn`}
      </div>
      <div className="property flex">
        <div className="bold">Fragrance:</div>
        {` Premium quality ingredients with natural essential oils`}
      </div>
      <div className="last flex row">
        <div className="property flex">
          <div className="bold">Burning Time:</div>
          {` 70-75 hours`}
        </div>
        <div className="property flex">
          <div className="bold">Dimension:</div>
          {` 10cm x 5cm`}
        </div>
        <div className="property flex">
          <div className="bold">Weight:</div>
          {` 400g`}
        </div>
      </div>
    </div>
    <div className="quote">
      All hand-made with natural soy wax, Candleaf is made for your pleasure
      moments.
    </div>
  </div>
);

const renderWideView = () => (
  <div className="wide flex">
    <div className="left flex column">
      <div className="img-wrapper">
        <img src={productBanner} alt="productBanner" />
      </div>
      <div className="quote">
        All hand-made with natural soy wax, Candleaf is made for your pleasure
        moments.
      </div>
    </div>
    <div className="right">
      <div className="name">New Candle</div>
      <div className="cost">$9.99</div>
      <div className="properties flex column">
        <div className="property flex">
          <div className="bold">Wax:</div>
          {` Top grade Soy wax that delivers a smoke less, consistent burn`}
        </div>
        <div className="property flex">
          <div className="bold">Fragrance:</div>
          {` Premium quality ingredients with natural essential oils`}
        </div>
        <div className="last flex row">
          <div className="property flex">
            <div className="bold">Burning Time:</div>
            {` 70-75 hours`}
          </div>
          <div className="property flex">
            <div className="bold">Dimension:</div>
            {` 10cm x 5cm`}
          </div>
          <div className="property flex">
            <div className="bold">Weight:</div>
            {` 400g`}
          </div>
        </div>
      </div>
      <div className="button-group flex">
        <Button name="Quantity" onClick={() => {}} outerClassName="stock" />
        <Button
          name="Add to cart"
          onClick={() => {}}
          outerClassName="add-to-cart"
        />
      </div>
      <div className="in-stock">In stock: 20</div>
    </div>
  </div>
);

const ProductDetail = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className="product-detail">
      <div className="content">
        {isMobile ? renderMobileView() : renderWideView()}
      </div>
    </div>
  );
};

export default ProductDetail;
