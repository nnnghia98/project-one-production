import React from "react";

import { ShoppingCenterWelcomeBanner } from "components/index";

import "./styles.scss";

const ShoppingCenter = () => {
  return (
    <div className="shoppingCenter">
      <ShoppingCenterWelcomeBanner />

      <div className="content flex column"></div>
    </div>
  );
};

export default ShoppingCenter;