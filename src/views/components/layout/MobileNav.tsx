import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { PiPlus } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();
  // const ispath = location.pathname === "/home/addSubscription";

  const path = location.pathname;

  const pathTab = path.split("/");

  console.log("le path dans subscribe param", pathTab);

  return (
    <div className={pathTab.length > 3 || pathTab[1] === "settings" || pathTab[2] === "addSubscription" || pathTab[1] === "payments" ? "hidden" : ""}>
      <div className="md:hidden fixed bg-[#05051106] backdrop-blur-md bottom-0 flex justify-between items-center px-14 py-3 z-50 w-[100%] text-white-0 ">
        <span className="cursor-pointer ">
          <Link to="/home">
            <HiOutlineHome size={24} />
          </Link>
        </span>
        <span className="cursor-pointer bg-primary-0 text-[#ffffff] flex p-3 rounded-full items-center justify-center">
          <Link to="/home/addSubscription">
            <PiPlus size={24} />
          </Link>
        </span>
        <span className=" cursor-pointer">
          <Link to="/settings">
            <IoSettingsOutline size={24} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default MobileNav;
