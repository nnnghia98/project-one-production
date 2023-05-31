import React from "react";

import { IButtonProps } from "interfaces/Button";

import "./styles.scss";

const Button = ({
  name,
  url,
  outerClassName,
  onClick = () => {},
}: IButtonProps) => {
  const openInNewTab = () => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div
      className={`button flex ${outerClassName}`}
      onClick={url ? openInNewTab : onClick}
    >
      {name}
    </div>
  );
};

export default Button;
