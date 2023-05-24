import { Route, RouteObject } from "react-router-dom";

export interface IRoute {
  path: string;
  element: React.ReactNode | null;
}
