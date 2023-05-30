import React from "react";

import hamburgerSvg from "assets/svg/hamburger.svg";

import "./styles.scss";

const Header = () => {
  const handleLogoClick = () => console.log("change page");

  return (
    <div className="header flex">
      <div className="content flex">
        <input type="checkbox" id="nav-check" />

        <picture className="logo" onClick={handleLogoClick}>
          portfolio
        </picture>
        <div className="hamburger-btn">
          <label htmlFor="nav-check">
            <img src={hamburgerSvg} alt="hamburgerSvg" />
          </label>
        </div>
        <div className="navbar-tabs flex row">
          <a href="#aboutMe">About</a>
          <a href="#experiences">Experiences</a>
          <a href="#projects">Projects</a>
          <a href="#hobbies">Hobbies</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
