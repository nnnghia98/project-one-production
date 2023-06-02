import React from "react";

import githubSvg from "assets/svg/github.svg";
import linkedInSvg from "assets/svg/linkedIn.svg";

import "./styles.scss";

const WelcomeBanner = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="welcomeBanner">
      <div className="title">Hello!</div>
      <div className="description">
        I'm Nghia, and I currently attend Simpson for engineering. Welcome to my
        first web dev project 😎
      </div>
      <div className="icon-wrapper">
        <div
          className="svg-wrapper"
          onClick={() => openInNewTab("https://www.linkedin.com/in/nghiann221")}
        >
          <img src={linkedInSvg} alt="linkedIn icon" />
        </div>
        <div
          className="svg-wrapper"
          onClick={() => openInNewTab("https://github.com/nnnghia98")}
        >
          <img src={githubSvg} alt="github icon" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
