import { ICartItemProps } from "interfaces";

export interface IGlobalState {
  isSignedIn: boolean;
  inCart: Array<ICartItemProps>;
}

export interface IAppContext {
  globalState: IGlobalState;
  setGlobalState?: React.Dispatch<React.SetStateAction<IGlobalState>>;
}
