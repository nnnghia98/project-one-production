import { createBrowserRouter } from "react-router-dom";
import { Portfolio } from "pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/shopping-center",
  },
]);
