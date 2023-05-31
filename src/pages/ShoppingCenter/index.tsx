import React from "react";

import {
  ShoppingCenterWelcomeBanner,
  Products,
  ProductHighlight,
} from "components/index";

import "./styles.scss";

const ShoppingCenter = () => {
  return (
    <div className="shopping-center">
      <ShoppingCenterWelcomeBanner />

      <div className="content flex column">
        <Products />
        <ProductHighlight />
      </div>
    </div>
  );
};

export default ShoppingCenter;
