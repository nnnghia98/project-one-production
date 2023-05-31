import React from "react";
import isEqual from "lodash/isEqual";
import { useLocation, useNavigate } from "react-router-dom";

import hamburgerSvg from "assets/svg/hamburger.svg";

import "./styles.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () =>
    navigate(
      isEqual(location.pathname, "/portfolio")
        ? "/shopping-center"
        : "/portfolio"
    );

  return (
    <div className="header flex">
      <div className="content flex">
        <input type="checkbox" id="nav-check" />
        <picture className="logo" onClick={handleLogoClick}>
          {isEqual(location.pathname, "/portfolio")
            ? "portfolio"
            : "shopping center"}
        </picture>
        <div className="hamburger-btn">
          <label htmlFor="nav-check">
            <img src={hamburgerSvg} alt="hamburgerSvg" />
          </label>
        </div>
        <div className="navbar-tabs flex row">
          {isEqual(location.pathname, "/portfolio") ? (
            <>
              <a href="#aboutMe">About</a>
              <a href="#experiences">Experiences</a>
              <a href="#projects">Projects</a>
              <a href="#hobbies">Hobbies</a>
            </>
          ) : (
            <>
              <a href="/shopping-center">All Products</a>
              <a href="/shopping-center">Cart</a>
              <a href="/shopping-center">Sign in</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
