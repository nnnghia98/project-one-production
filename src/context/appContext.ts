import { createContext } from "react";

import { getStorageItem } from "utils";
import { IAppContext } from "interfaces";

export const AppContext = createContext<IAppContext>({
  globalState: {
    isSignedIn: getStorageItem("isSignedIn") || false,
    inCart: getStorageItem("cart") || [],
  },
});
