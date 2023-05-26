import React from "react";

import { WelcomeBanner, AboutMe } from "components/index";

import "./styles.scss";

const Portfolio = () => (
  <div className="portfolio">
    <WelcomeBanner />
    <AboutMe />
  </div>
);

export default Portfolio;
