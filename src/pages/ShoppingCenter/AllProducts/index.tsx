import React from "react";
import { useNavigate } from "react-router-dom";

import { ProductItem } from "components";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const AllProducts = () => {
  const navigate = useNavigate();

  const handleProductClick = () => navigate("/shopping-center/product/detail");

  return (
    <div className="all-products">
      <div className="content">
        <div className="title">All products</div>
        <div className="short-des">All of what you need is here</div>
        <div className="list flex row">
          <div className="item">
            <ProductItem
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={handleProductClick}
            />
          </div>
          <div className="item">
            <ProductItem
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={handleProductClick}
            />
          </div>
          <div className="item">
            <ProductItem
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={handleProductClick}
            />
          </div>
          <div className="item">
            <ProductItem
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={handleProductClick}
            />
          </div>
          <div className="item">
            <ProductItem
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={handleProductClick}
            />
          </div>
          <div className="item">
            <ProductItem
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={handleProductClick}
            />
          </div>
          <div className="item">
            <ProductItem
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={handleProductClick}
            />
          </div>
          <div className="item">
            <ProductItem
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={handleProductClick}
            />
          </div>
          <div className="item">
            <ProductItem
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={handleProductClick}
            />
          </div>
          <div className="item">
            <ProductItem
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={handleProductClick}
            />
          </div>
          <div className="item">
            <ProductItem
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={handleProductClick}
            />
          </div>
          <div className="item">
            <ProductItem
              thumbnail={productThumbnail}
              name={"Product Name"}
              cost={9.99}
              onClick={handleProductClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
