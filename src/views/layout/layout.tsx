import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/layout/Narbar";
import MobileNav from "../components/layout/MobileNav";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/images/png/Group.png";
import ScreenSizeContext, {
  ScreenSizeProvider,
} from "../../contexts/screenSizeContext";
// let arrowLeft = require("../../../assets/images/png/Group.png") as any;

interface ScreenSize {
  width: number;
  //   height: number;
}

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ispath = location.pathname === "/home/addSubscription";
  const path = location.pathname;
  const pathTab = path.split("/");
  // console.log(pathTab);

  const [windowSize, setWindowSize] = useState<ScreenSize>({
    width: window.innerWidth,
    // height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      //   height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleReturn = () => {
    console.log(pathTab);
    if( pathTab[1] === "home" && pathTab.length === 3  ) {
      navigate(pathTab[1])
    } else if( pathTab[1] === "home" && pathTab.length > 3  ) {
      navigate(pathTab[1 ] +"/"+ pathTab[2])
    } else if( pathTab[1] === "settings" ) {
      navigate("home")
    } 
  }
  

  

  return (
    <div className="relative ">
      <ScreenSizeProvider>
        <Navbar />
        <div
          className={`relative px-6 sm:px-[52px]  ${
            ispath ? "lg:py-[81px]  " : "md:pt-12 "
          } ${
            windowSize.width < 768 && pathTab[1] === "settings"
              ? "py-0"
              : "py-6"
          }`}
        >

          {/* return button */}
          {(pathTab[1] === "home" && pathTab.length > 2) ||
          pathTab[1] === "settings" || pathTab[1] === "payments" ? (
            <div onClick={handleReturn}
              className={`cursor-pointer ${windowSize.width < 768 &&
                pathTab[1] === "settings" && "pt-6" } mb-6 md:hidden`}
            >
              <img src={arrowLeft} alt="fleche" />
            </div>
          ) : (
            ""
          )}
          <div
            className={`${
              windowSize.width < 768 &&
              pathTab[1] === "settings" &&
              "-z-10 absolute top-0 left-0 w-full"
            }`}
          >
            <Outlet />
          </div>
        </div>
        <MobileNav />
      </ScreenSizeProvider>
    </div>
  );
};

export default Layout;
