import { useState, useEffect } from "react";

import {
  ShoppingCenterWelcomeBanner,
  Products,
  ProductHighlight,
  Popular,
  Loading,
} from "components";
import { setStorageItem } from "utils";
import { fetchProducts } from "api";
import { IProductItemProps } from "interfaces";

import "./styles.scss";

const ShoppingCenter = () => {
  const [products, setProducts] = useState<Array<IProductItemProps>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllProducts = () => {
    fetchProducts()
      .then((data: Array<IProductItemProps>) => {
        setStorageItem("products", data);
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    setIsLoading(true);
    getAllProducts();
  }, []);

  return (
    <div className="shopping-center">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ShoppingCenterWelcomeBanner />
          <div className="flex column">
            <Products products={products} />
            <ProductHighlight />
            <Popular products={products} />
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCenter;
