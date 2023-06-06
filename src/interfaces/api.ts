export interface ICountry {
  iso2: string;
  iso3: string;
  country: string;
  cities: Array<string>;
}

export interface ICountriesResponse {
  error: boolean;
  msg: string;
  data: Array<ICountry>;
}
