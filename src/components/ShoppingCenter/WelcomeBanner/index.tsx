import React from "react";

import { useWindowDimensions } from "utils/window";

import welcomeBanner from "assets/img/welcome-banner.png";
import mobileWelcomeBanner from "assets/img/mobile-welcome-banner.png";

import "./styles.scss";

const WelcomeBanner = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className="shoppingCenterWelcomeBanner flex">
      <img
        src={isMobile ? mobileWelcomeBanner : welcomeBanner}
        alt="welcomeBanner"
      />
      <picture>
        <div className="title">Welcome</div>
      </picture>
    </div>
  );
};

export default WelcomeBanner;
