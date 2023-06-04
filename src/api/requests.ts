import { IProductItemProps } from "interfaces";

import products from "../data/products.json";

export const fetchProducts = () =>
  new Promise<IProductItemProps[]>((resolve) =>
    setTimeout(() => resolve(products), 2000)
  );

// necessary to fetch api
// fetch('../data/products.json').then((res) => res.json()).then
