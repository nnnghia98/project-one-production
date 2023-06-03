import { createBrowserRouter } from "react-router-dom";
import {
  Portfolio,
  ShoppingCenter,
  Layout,
  ErrorPage,
  ProductDetail,
  AllProducts,
  Cart,
  SignIn,
  PaymentDetail,
} from "pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "shopping-center",
        element: <ShoppingCenter />,
      },
      {
        path: "shopping-center/all-products",
        element: <AllProducts />,
      },
      {
        path: "shopping-center/cart",
        element: <Cart />,
      },
      {
        path: "shopping-center/sign-in",
        element: <SignIn />,
      },
      {
        path: "shopping-center/checkout",
        element: <PaymentDetail />,
      },
      {
        path: "shopping-center/product/detail",
        element: <ProductDetail />,
      },
    ],
  },
]);
