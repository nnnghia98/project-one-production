import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "components";
import { IGlobalState } from "interfaces";
import { getStorageItem } from "utils";
import { AppContext } from "context";

import "./styles.scss";

const Layout = () => {
  const [globalState, setGlobalState] = useState<IGlobalState>({
    isSignedIn: getStorageItem("isSignedIn") || false,
    inCart: getStorageItem("cart") || [],
  });

  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      <div className="layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default Layout;
