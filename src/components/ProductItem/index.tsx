import React from "react";

import { IProductItemProps } from "interfaces/ShoppingCenter";

import "./styles.scss";

const Item = ({ thumbnail, name, cost, onClick }: IProductItemProps) => {
  return (
    <div className="product-item" onClick={onClick}>
      <div className="img-wrapper">
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className="detail">
        <div className="name">{name}</div>
        <div className="cost">{cost}$</div>
      </div>
    </div>
  );
};

export default Item;
