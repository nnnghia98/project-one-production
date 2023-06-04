import { useNavigate } from "react-router-dom";

import { Button, ProductItem } from "components";
import { IProductsProps, IProductItemProps } from "interfaces";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const Products = ({ products }: IProductsProps) => {
  const navigate = useNavigate();

  const navigateToProducts = () => navigate("/shopping-center/all-products");

  return (
    <div className="products">
      <div className="content">
        <div className="title">Products</div>
        <div className="short-des">
          Order it for you or for your beloved ones
        </div>
        <div className="list flex row">
          {products.length > 0 &&
            products.slice(0, 8).map((product: IProductItemProps) => (
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
