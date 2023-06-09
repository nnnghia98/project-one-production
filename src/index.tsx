import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { IXInputFieldProps, IXDropdownFieldProps } from "./interfaces";

import reportWebVitals from "./reportWebVitals";
import { router } from "routes";

import "components/Input";
import "components/XDropdown";

import "./index.scss";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "x-input": IXInputFieldProps;
      "x-dropdown": IXDropdownFieldProps;
    }
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
