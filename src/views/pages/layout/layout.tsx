import React from "react";
import Navbar from "../../components/layout/Narbar";
import MobileNav from "../../components/layout/MobileNav";
import { Outlet, useLocation } from "react-router-dom";

let arrowLeft = require("../../../assets/images/png/Group.png") as any;

const Layout = () => {
  const location = useLocation();
  const ispath = location.pathname === "/home/addSubscription";

  const path = location.pathname;

  const pathTab = path.split("/");

  //   console.log(pathTab)
  return (
    <>
      <Navbar />
      <div
        className={`px-6 sm:px-[52px] max-sm:py-6 ${
          ispath ? "py-[81px]" : "pt-12"
        }`}
      >
        { pathTab[1] === "home" && pathTab.length > 2 && <div className="mb-6 md:hidden">
          <img src={arrowLeft} alt="fleche" />
        </div>}
        <Outlet />
      </div>
      <MobileNav />
    </>
  );
};

export default Layout;
