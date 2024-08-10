import { FC, useContext, useEffect, useState } from "react";
import SearchBar from "../basis/navBar_basis/searchBar";
import Button from "../basis/buttons/Button";
import Menu from "../basis/navBar_basis/menu";
// import MobileNav from "./MobileNav";
import { useLocation } from "react-router-dom";
import logo from "@/src/assets/images/png/logo.png";
import { useNavigate } from "react-router-dom";
import UserContext from "@/src/contexts/userDataContext";

// let logo = require("../../../assets/images/png/logo.png") as any;
// let git = require("../../../assets/images/png/git.png") as any;
let profile = require("@/src/assets/images/png/profile.png") as any;
let theme = require("@/src/assets/images/png/theme.png") as any;

const Narbar: FC = () => {
  const location = useLocation();
  const isPathTrue = location.pathname === "/";
  const [isNav, setIsNav] = useState<boolean>(false);

  const path = location.pathname;
  const pathTab = path.split("/");

  useEffect(() => {
    switch (location.pathname) {
      case "/home/overview":
      case "/home/upcomming":
      case "/home":
        setIsNav(false);
        break;
      case "/home/addSubscription":
      case "/settings":
      case "/payments":
        setIsNav(true);
        break;
    }

    if(pathTab[2] === 'subscription' || pathTab[2] ==='addSubscription') {
      setIsNav(true);
    }
  }, [location]);

  // const isPathHome =
  //   location.pathname === "/home" ||
  //   location.pathname === "/home/overview" ||
  //   location.pathname !== "/home/upcomming" ;

  const navigate = useNavigate();
  const navbarClick = () => {
    navigate("/settings");
  };
  // Get user data from context
  const { username, photo } = useContext(UserContext)!;

  return (
    <div className={`${isPathTrue && "hidden"}`}>
      {/* mobile nav */}
      <div
        className={`${isNav && "hidden"} px-6 sm:px-[52px] md:hidden w-full `}
      >
        <div className=" mx-auto flex flex-col items-center justify-center">
          <div className="flex justify-between items-center w-full pt-12 pb-3 text-sm">
            <div className="flex items-center space-x-3" onClick={navbarClick}>
              {photo ? (
                <img
                  src={`${process.env.REACT_APP_API_URL}/storage/${photo}`}
                  alt=""
                  className="w-[32px] h-[32px] rounded-full"
                />
              ) : (
                <img src={profile} alt="profile" />
              )}
              {/* <img src={profile} alt="profile" /> */}
              <span className=" text-[16px] "> Hey, {username}. </span>
            </div>
          </div>
        </div>
      </div>

      {/* other nav */}
      <div className="max-md:hidden ">
        <div className="flex justify-between items-center w-full py-[17px] text-sm px-[52px]">
          <div className=" flex items-center space-x-[5px]">
            <span>
              <img src={logo} alt="logo" />
            </span>
            <span className=" font-normal text-[21.86px] font-russOne text-[#fff]">
              SubScribe.
            </span>
          </div>
          <div className=" flex space-x-4">
            <SearchBar />

            <div className=" flex items-center space-x-[15px]">
              {/* <div>
                <img src={git} alt="gitimg" />
              </div> */}
              <div onClick={navbarClick}>
                {photo ? (
                  <img
                    src={`${process.env.REACT_APP_API_URL}/storage/${photo}`}
                    alt=""
                    className="w-[32px] h-[32px] rounded-full"
                  />
                ) : (
                  <img src={profile} alt="profile" />
                )}
              </div>
              <Button btnIcon={<img src={theme} alt="btnTheme" />} />
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Narbar;
