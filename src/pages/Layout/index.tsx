import { Outlet } from "react-router-dom";

import { Header, Footer } from "components";

import "./styles.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
