import React from "react";

import { ShoppingCenterWelcomeBanner, Products } from "components/index";

import "./styles.scss";

const ShoppingCenter = () => {
  return (
    <div className="shoppingCenter">
      <ShoppingCenterWelcomeBanner />

      <div className="content flex column">
        <Products />
      </div>
    </div>
  );
};

export default ShoppingCenter;
