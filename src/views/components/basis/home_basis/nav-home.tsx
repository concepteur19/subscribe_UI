import React, { useState } from "react";
import Button from "../buttons/Button";
import { Link, NavLink } from "react-router-dom";

const NavHome = () => {
  const [isActive, setActive] = useState(true);

  const handleNavClick = (param: string) => {
    if (param === "over" && isActive === false) {
      setActive(!isActive);
    } else if (param === "upco" && isActive === true) {
      setActive(!isActive);
    }
  };

  return (
    <div className=" text-[#697386] border border-transparent border-b-[#303055] pb-[0.2px] flex flex-row justify-between items-start">
      <div>
        <ul className="flex justify-start space-x-12 ">
          <li
            className={
              isActive
                ? "active-home border-[2px] border-transparent border-b-[#625AFA] pb-3"
                : "border-[2px] border-transparent pb-3"
            }
            onClick={() => handleNavClick("over")}
          >
            <span>Overview</span>
          </li>
          <li
            className={
              !isActive
                ? "active-home border-[2px] border-transparent border-b-[#625AFA] pb-3"
                : " border-[2px] border-transparent pb-3"
            }
            onClick={() => handleNavClick("upco")}
          >
            <span>Upcoming payments</span>
          </li>
        </ul>
      </div>

      <div className="-mt-[5px]">
        <Link to="/home/addSubscription">
          <Button
            btnBg=" bg-[#4649E5]"
            btnText=" text-sm font-redRoseBold text-[#ffffff]"
            btnP="px-8 py-[6.5px] "
            btnBorder="border border-[#625AFA] rounded"
            buttonText="Add"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavHome;
