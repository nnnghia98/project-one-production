import { ProductItem } from "components";
import { IProductsProps, IProductItemProps } from "interfaces";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const Popular = ({ products }: IProductsProps) => {
  const popularProducts = products.filter(
    (product: IProductItemProps) => product.isPopular
  );

  return (
    <div className="popular">
      <div className="content">
        <div className="title">Popular</div>
        <div className="short-des">
          Order it for you or for your beloved ones
        </div>
        <div className="list flex row">
          {Boolean(popularProducts.length) &&
            popularProducts.slice(0, 4).map((product: IProductItemProps) => (
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

export default Popular;
