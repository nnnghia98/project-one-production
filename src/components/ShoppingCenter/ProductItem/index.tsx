import React from "react";

import { IProductItemProps } from "interfaces/ShoppingCenter";

import "./styles.scss";

const Item = ({ thumbnail, name, cost }: IProductItemProps) => {
  return (
    <div className="product-item">
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