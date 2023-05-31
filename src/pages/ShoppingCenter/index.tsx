import React from "react";

import {
  ShoppingCenterWelcomeBanner,
  Products,
  ProductHighlight,
  Popular,
} from "components/index";

import "./styles.scss";

const ShoppingCenter = () => {
  return (
    <div className="shopping-center">
      <ShoppingCenterWelcomeBanner />

      <div className="flex column">
        <Products />
        <ProductHighlight />
        <Popular />
      </div>
    </div>
  );
};

export default ShoppingCenter;
