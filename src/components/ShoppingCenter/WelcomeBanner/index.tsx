import React from "react";

import welcomeBanner from "assets/img/welcome-banner.png";

import "./styles.scss";

const WelcomeBanner = () => {
  return (
    <div className="shoppingCenterWelcomeBanner">
      <img src={welcomeBanner} alt="welcomeBanner" />
      <div className="title">Welcome</div>
    </div>
  );
};

export default WelcomeBanner;
