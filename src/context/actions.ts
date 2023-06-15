import { IProductItemProps, ICartItemProps } from "interfaces";

export const toggleLoading = (
  isLoading: boolean
): {
  type: "TOGGLE_LOADING";
  payload: {
    isLoading: boolean;
  };
} => ({
  type: "TOGGLE_LOADING",
  payload: {
    isLoading,
  },
});

export const setSignedIn = (
  isSignedIn: boolean
): {
  type: "SET_SIGNED_IN";
  payload: {
    isSignedIn: boolean;
  };
} => ({
  type: "SET_SIGNED_IN",
  payload: {
    isSignedIn,
  },
});

export const setProducts = (
  products: Array<IProductItemProps>
): {
  type: "SET_PRODUCTS";
  payload: {
    products: Array<IProductItemProps>;
  };
} => ({
  type: "SET_PRODUCTS",
  payload: {
    products,
  },
});

export const setCart = (
  cart: Array<ICartItemProps>
): {
  type: "SET_CART";
  payload: {
    cart: Array<ICartItemProps>;
  };
} => ({
  type: "SET_CART",
  payload: {
    cart,
  },
});

export type TAction =
  | ReturnType<typeof toggleLoading>
  | ReturnType<typeof setProducts>
  | ReturnType<typeof setCart>
  | ReturnType<typeof setSignedIn>;
