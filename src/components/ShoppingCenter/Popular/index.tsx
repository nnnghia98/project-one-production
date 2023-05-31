import React from "react";

import Item from "../ProductItem";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const Popular = () => {
  return (
    <div className="popular">
      <div className="content">
        <div className="title">Popular</div>
        <div className="short-des">
          Order it for you or for your beloved ones
        </div>
        <div className="list flex row">
          <div className="item">
            <Item
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
            />
          </div>
          <div className="item">
            <Item
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
            />
          </div>
          <div className="item">
            <Item
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
            />
          </div>
          <div className="item">
            <Item
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
