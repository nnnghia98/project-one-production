import type { TAction } from "./actions";

import { getStorageItem } from "utils";
import { IProductItemProps, ICartItemProps } from "interfaces";

export const initialState = {
  isLoading: false,
  isSignedIn: getStorageItem("isSignedIn") || false,
  products: [],
  cart: [],
};

export type TStore = {
  isLoading: boolean;
  isSignedIn: boolean;
  products: Array<IProductItemProps>;
  cart: Array<ICartItemProps>;
};

export const reducer = (state: TStore, action: TAction) => {
  switch (action.type) {
    case "TOGGLE_LOADING":
      const isLoading = action.payload.isLoading;

      return { ...state, isLoading };
    case "SET_PRODUCTS":
      const products = action.payload.products;

      return { ...state, products };
    case "SET_CART":
      const cart = action.payload.cart;

      return { ...state, cart };
    case "SET_SIGNED_IN":
      const isSignedIn = action.payload.isSignedIn;

      return { ...state, isSignedIn };

    default:
      return state;
  }
};
