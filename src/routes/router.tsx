import { createBrowserRouter } from "react-router-dom";
import {
  Portfolio,
  ShoppingCenter,
  Layout,
  ErrorPage,
  ProductDetail,
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
        element: <ProductDetail />,
      },
      {
        path: "shopping-center/cart",
        element: <ProductDetail />,
      },
      {
        path: "shopping-center/sign-in",
        element: <ProductDetail />,
      },
    ],
  },
]);
