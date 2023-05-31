import { createBrowserRouter } from "react-router-dom";
import { Portfolio, ShoppingCenter, Layout, ErrorPage } from "pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/shopping-center",
        element: <ShoppingCenter />,
      },
    ],
  },
]);
