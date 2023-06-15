import { useReducer } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer, Loading } from "components";
import { AppContext } from "context";

import type { TStore, TAction } from "context";
import { reducer, initialState } from "context";

import "./styles.scss";

const Layout = () => {
  const [state, dispatch] = useReducer<React.Reducer<TStore, TAction>>(
    reducer,
    initialState
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="layout">
        {state.isLoading && <Loading />}
        <Header />
        <Outlet />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default Layout;
