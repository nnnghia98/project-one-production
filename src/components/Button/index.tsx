import React from "react";

import { IButtonProps } from "interfaces/Button";

import "./styles.scss";

const Button = ({ name, url, onClick = () => {} }: IButtonProps) => {
  const openInNewTab = () => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="button flex" onClick={url.length ? openInNewTab : onClick}>
      {name}
    </div>
  );
};

export default Button;
