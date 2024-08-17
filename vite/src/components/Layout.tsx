import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();

  const page = pathname === "/" ? "home" : pathname.split("/")[1];

  return (
    <div className={`page-wrapper ${page}`}>
      <Header />

      <Outlet />
    </div>
  );
}

export default Layout;
