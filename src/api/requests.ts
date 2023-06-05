import { IProductItemProps } from "interfaces";

import products from "../data/products.json";
import countries from "../data/countries.json";

export const fetchProducts = () =>
  new Promise<IProductItemProps[]>((resolve) =>
    setTimeout(() => resolve(products), 2000)
  );

interface ICountry {
  iso2: string;
  iso3: string;
  country: string;
  cities: Array<string>;
}
interface ICountriesResponse {
  error: boolean;
  msg: string;
  data: Array<ICountry>;
}

export const fetchCountries = () =>
  new Promise<ICountriesResponse>((resolve) =>
    setTimeout(() => resolve(countries), 2000)
  );
