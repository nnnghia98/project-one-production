import { createBrowserRouter } from "react-router-dom";
import {
  Portfolio,
  ShoppingCenter,
  Layout,
  ErrorPage,
  AllProducts,
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
        children: [
          {
            path: "all-products",
            element: <AllProducts />,
          },
        ],
      },
    ],
  },
]);
