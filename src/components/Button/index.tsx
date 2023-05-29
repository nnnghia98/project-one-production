import React from "react";

import { IButtonProps } from "interfaces/Button";

import "./styles.scss";

const Button = ({ name, onClick = () => {} }: IButtonProps) => {
  return (
    <div className="button flex" onClick={onClick}>
      {name}
    </div>
  );
};

export default Button;
