import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { PiPlus } from "react-icons/pi";

const MobileNav = () => {
  return (
    <div className="sm:hidden fixed bg-[#05051106] backdrop-blur-md bottom-0 flex justify-between items-center px-14 py-3 z-50 w-[100%] text-white-0 ">
      <span className="cursor-pointer ">
        <HiOutlineHome size={24} />
      </span>
      <span className="cursor-pointer bg-primary-0 text-[#ffffff] flex p-3 rounded-full items-center justify-center">
        <PiPlus size={24} />
      </span>
      <span className=" cursor-pointer">
        <IoSettingsOutline size={24} />
      </span>
    </div>
  );
};

export default MobileNav;
