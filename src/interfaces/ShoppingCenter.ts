import { ICountry } from "./api";

export interface IProductItemProps {
  id: string;
  name: string;
  cost: string;
  quantity?: number;
  isPopular?: boolean;
}

export interface IProductsProps {
  products: IProductItemProps[];
}

export interface IBenefitItemProps {
  benefit: string;
}

export interface ICartItemProps {
  id: string;
  name: string;
  cost: number;
  quantity?: number;
  isPopular?: boolean;
}

export interface ICartProps {
  cart: ICartItemProps[];
}

export interface IPaymentDetailFormValues {
  firstName?: string;
  lastName?: string;
  address?: string;
  phoneNumber?: string;
  country?: ICountry;
  city?: string;
  postalCode?: string;
  shippingNote?: string;
  isSaveShippingDetail?: boolean;
}

export interface IPaymentDetailFormError {
  firstName?: string;
  lastName?: string;
  address?: string;
  phoneNumber?: string;
  country?: string;
  city?: string;
  postalCode?: string;
  shippingNote?: string;
  isSaveShippingDetail?: string;
}
