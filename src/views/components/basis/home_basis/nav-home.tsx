import React from "react";
import Button from "../buttons/Button";
import { Link, useLocation } from "react-router-dom";

interface NavHomeProps {
  handleNavClick: (param: string) => void;
}


const NavHome: React.FC<NavHomeProps> = ({ handleNavClick }) => {
  

  const NAV_ITEMS = [
    { label: "Overview", path: "/home/overview" },
    { label: "Upcoming subscriptions", path: "/home/upcoming" },
  ];

  const location = useLocation();

  const isActive = location.pathname === "/home" || location.pathname === "/home/overview";

  return (
    <div className=" text-[#697386] border border-transparent border-b-[#303055] pb-[0.2px] flex flex-row justify-between items-start">
      <div>
        <ul className="flex justify-start space-x-12 ">
          {/* <li
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
            <span>Upcoming subscriptions</span>
          </li> */}

          {NAV_ITEMS.map((item) => (
            <li key={item.path} className="pb-4">
              <Link
                to={item.path}
                className={`border-[2px] border-transparent pb-4 ${((isActive && item.path === "/home/overview") || location.pathname === item.path) && "active-home border-b-[#625AFA]"}  `}
                onClick={() => handleNavClick(item.path)}
              >
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
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
