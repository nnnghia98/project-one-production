import { useContext } from "react";
import isEqual from "lodash/isEqual";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { removeStorageItem } from "utils";
import { AppContext } from "context";

import hamburgerSvg from "assets/svg/hamburger.svg";

import "./styles.scss";

const Header = () => {
  const { globalState, setGlobalState } = useContext(AppContext);

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

    if (setGlobalState) setGlobalState({ ...globalState, isSignedIn: false });
  };

  const renderNumberInCart = () => {
    const cart = globalState?.inCart;

    if (!cart || !cart.length) {
      return;
    }

    if (cart.length >= 99) {
      return ` (99+)`;
    }

    return ` (${cart.length})`;
  };

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
              {globalState?.isSignedIn ? (
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
