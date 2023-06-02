import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "components";

import Item from "../../ProductItem";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const Products = () => {
  const navigate = useNavigate();

  const navigateToProductDetail = () =>
    navigate("/shopping-center/product/detail");

  const navigateToProducts = () => navigate("/shopping-center/all-products");

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
              onClick={navigateToProductDetail}
            />
          </div>
          <div className="item">
            <Item
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={navigateToProductDetail}
            />
          </div>
          <div className="item">
            <Item
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={navigateToProductDetail}
            />
          </div>
          <div className="item">
            <Item
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={navigateToProductDetail}
            />
          </div>
          <div className="item">
            <Item
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={navigateToProductDetail}
            />
          </div>
          <div className="item">
            <Item
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={navigateToProductDetail}
            />
          </div>
          <div className="item">
            <Item
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={navigateToProductDetail}
            />
          </div>
          <div className="item">
            <Item
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={navigateToProductDetail}
            />
          </div>
        </div>
        <div className="button-wrapper flex">
          <Button
            name="See more"
            onClick={navigateToProducts}
            outerClassName="outer-button"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
