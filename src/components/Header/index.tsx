import { useState, useEffect } from "react";
import isEqual from "lodash/isEqual";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { getStorageItem, removeStorageItem } from "utils";

import hamburgerSvg from "assets/svg/hamburger.svg";

import "./styles.scss";

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(
    () => getStorageItem("isSignedIn") || false
  );

  const [inCart, setInCart] = useState(getStorageItem("cart").length || 0);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () =>
    navigate(
      isEqual(location.pathname, "/portfolio")
        ? "/shopping-center"
        : "/portfolio"
    );

  const handleSignOut = () => {
    removeStorageItem("email");
    removeStorageItem("password");
    removeStorageItem("isSignedIn");
    setIsSignedIn(false);
  };

  const renderNumberInCart = () => {
    if (inCart.length) {
      return;
    }

    if (inCart.length >= 99) {
      return ` (99+)`;
    }

    return ` (${inCart})`;
  };

  useEffect(() => setInCart(getStorageItem("cart").length), []);

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
        <>
          {isEqual(location.pathname, "/portfolio") ? (
            <div className="navbar-tabs items-4 flex row">
              <a href="#aboutMe">About</a>
              <a href="#experiences">Experiences</a>
              <a href="#projects">Projects</a>
              <a href="#hobbies">Hobbies</a>
            </div>
          ) : (
            <div className="navbar-tabs items-3 flex row">
              <Link to="/shopping-center/all-products">All Products</Link>
              <Link to="/shopping-center/cart">
                Cart {renderNumberInCart()}
              </Link>
              {isSignedIn ? (
                <div className="sign-out" onClick={handleSignOut}>
                  nnnghia98 / Sign Out
                </div>
              ) : (
                <Link to="/shopping-center/sign-in">Sign In</Link>
              )}
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Header;
