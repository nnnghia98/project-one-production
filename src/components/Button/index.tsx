import React from "react";

import { IButtonProps } from "interfaces/components";

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
    <button
      className={`my-button flex ${outerClassName}`}
      onClick={url ? openInNewTab : onClick}
    >
      {name}
    </button>
  );
};

export default Button;
