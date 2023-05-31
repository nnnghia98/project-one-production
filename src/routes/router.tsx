import { createBrowserRouter } from "react-router-dom";
import { Portfolio, ShoppingCenter, ErrorPage } from "pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shopping-center",
    element: <ShoppingCenter />,
  },
]);
