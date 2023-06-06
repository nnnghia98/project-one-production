import { IProductItemProps, ICountriesResponse } from "interfaces";

import products from "../data/products.json";
import countries from "../data/countries.json";

export const fetchProducts = () =>
  new Promise<IProductItemProps[]>((resolve) =>
    setTimeout(() => resolve(products), 1000)
  );

export const fetchCountries = () =>
  new Promise<ICountriesResponse>((resolve) =>
    setTimeout(() => resolve(countries), 2000)
  );
