import { ProductItem } from "components";
import { getStorageItem } from "utils";
import { IProductItemProps } from "interfaces";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const AllProducts = () => {
  const products = getStorageItem("products");

  return (
    <div className="all-products">
      <div className="content">
        <div className="title">All products</div>
        <div className="short-des">All of what you need is here</div>
        <div className="list flex row">
          {products.length &&
            products.map((product: IProductItemProps) => (
              <div key={product.id} className="item">
                <ProductItem
                  id={product.id}
                  thumbnail={productThumbnail}
                  name={product.name}
                  cost={product.cost}
                  isPopular={product.isPopular}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
