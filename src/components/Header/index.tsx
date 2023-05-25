import React from "react";

import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <picture className="logo">portfolio</picture>
        <div className="navbar-tabs">
          <div>about</div>
          <div>experiences</div>
          <div>projects</div>
          <div>hobbies</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
