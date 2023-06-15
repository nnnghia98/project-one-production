import { createContext } from "react";

import type { TStore, TAction } from "context";

type Context = {
  state: TStore;
  dispatch: React.Dispatch<TAction>;
};

export const AppContext = createContext<Context>({} as Context);
