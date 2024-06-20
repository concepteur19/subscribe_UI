import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../../elements/logo.svg";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex justify-center pt-7 pb-1 px-8 max-sm:px-4">
        <div className="flex justify-between items-center w-full mx-auto max-w-[1276.8px]">
          <div className="logo flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
          <div className="nav-links flex items-center max-lg:hidden">
            <a
              href="#product"
              className="px-[10px] py-[14px] text-white text-[15.5px]"
            >
              Product
            </a>
            <a
              href="#feature"
              className="px-[10px] py-[14px] text-white text-[15.5px]"
            >
              Feature
            </a>
            <a
              href="#HIW"
              className="px-[10px] py-[14px] text-white text-[15.5px]"
            >
              How it work
            </a>
            <a
              href="#company"
              className="px-[10px] py-[14px] text-white text-[15.5px]"
            >
              Company
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div 
              className="flex items-center justify-center lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M17.25 12.6157C17.25 13.0296 16.9139 13.3657 16.5 13.3657H1.5C1.08608 13.3657 0.75 13.0296 0.75 12.6157C0.75 12.2018 1.08608 11.8657 1.5 11.8657H16.5C16.9139 11.8657 17.25 12.2018 17.25 12.6157Z"
                  fill="white"
                />
                <path
                  d="M17.25 6.99072C17.25 7.40465 16.9139 7.74072 16.5 7.74072H1.5C1.08608 7.74072 0.75 7.40465 0.75 6.99072C0.75 6.5768 1.08608 6.24072 1.5 6.24072H16.5C16.9139 6.24072 17.25 6.5768 17.25 6.99072Z"
                  fill="white"
                />
                <path
                  d="M17.25 1.36572C17.25 1.77965 16.9139 2.11572 16.5 2.11572H1.5C1.08608 2.11572 0.75 1.77965 0.75 1.36572C0.75 0.951798 1.08608 0.615723 1.5 0.615723H16.5C16.9139 0.615723 17.25 0.951798 17.25 1.36572Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="nav-buttons max-sm:hidden">
              <Link to="/login">
                <button className="login-button px-[14px] py-[13px] text-[15.5px] bg-transparent text-white rounded-[8px] cursor-pointer">
                  Login
                </button>
              </Link>
              <Link to="/login">
                <button className="getStarted-button px-[24.34px] py-[11.59px] text-[15.5px] bg-[#4649E5] text-white rounded-[8px] cursor-pointer">
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="burger-menu flex flex-col items-center bg-black text-white w-full py-4 lg:hidden"
        >
          <Link to="/login"
            href="#product"
            className="py-4 text-[15.5px]"
            onClick={toggleMenu}
          >
            Login
          </Link>
          <Link to="/login"
            className=" text-[15.5px]"
            onClick={toggleMenu}
          >
            signUp
          </Link>
          
        </motion.div>
      )}
    </>
  );
}
