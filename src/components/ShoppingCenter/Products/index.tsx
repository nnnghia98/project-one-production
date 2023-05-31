import React from "react";

import { Button } from "components";

import Item from "./Item";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const Products = () => {
  return (
    <div className="products">
      <div className="content">
        <div className="title">Products</div>
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

        <div className="button-wrapper flex">
          <Button
            name="See more"
            onClick={() => {}}
            outerClassName="outer-button"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
