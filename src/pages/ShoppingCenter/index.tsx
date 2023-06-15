import { useState, useEffect, useContext } from "react";

import {
  ShoppingCenterWelcomeBanner,
  Products,
  ProductHighlight,
  Popular,
} from "components";
import { getStorageItem, setStorageItem } from "utils";
import { fetchProducts } from "api";
import { IProductItemProps } from "interfaces";
import { AppContext, toggleLoading } from "context";

import "./styles.scss";

const ShoppingCenter = () => {
  const [products, setProducts] = useState<Array<IProductItemProps>>([]);

  const { dispatch } = useContext(AppContext);

  getStorageItem("cart") ?? setStorageItem("cart", []);

  useEffect(() => {
    dispatch(toggleLoading(true));

    const getAllProducts = () => {
      fetchProducts()
        .then((data: Array<IProductItemProps>) => {
          setStorageItem("products", data);
          setProducts(data);
          dispatch(toggleLoading(false));
        })
        .catch((error) => console.error(error));
    };

    getAllProducts();
  }, [dispatch]);

  return (
    <>
      <div className="shopping-center">
        <ShoppingCenterWelcomeBanner />
        <div className="flex column">
          <Products products={products} />
          <ProductHighlight />
          <Popular products={products} />
        </div>
      </div>
    </>
  );
};

export default ShoppingCenter;
