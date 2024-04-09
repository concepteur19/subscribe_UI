import { FC } from "react";
import SearchBar from "../basis/navBar_basis/searchBar";
import Button from "../basis/buttons/Button";
import Menu from "../basis/navBar_basis/menu";
// import logo from '../../../assets/images/png/logo.png'

let logo = require('../../../assets/images/png/logo.png') as any;
let git = require('../../../assets/images/png/git.png') as any;
let profile = require('../../../assets/images/png/profile.png') as any;
let theme = require('../../../assets/images/png/theme.png') as any;

const Narbar: FC = () => {
  const navbarClick = () => {};

  return (
    <div className="">
      <div className="flex justify-between items-center w-full py-[17px] text-sm px-[52px]">
        <div className=" flex items-center space-x-[5px]">
          <span>
            <img src={logo} alt="logo" /> 
          </span>
          <span className=" font-normal text-[21.86px] font-russOne">SubScribe.</span>
        </div>
        <div className=" flex space-x-4">
          <SearchBar />

          <div className=" flex items-center space-x-[15px]">
            <div>
              <img src={git} alt="gitimg" />
            </div>
            <div>
              <img src={profile} alt="profile" />
            </div>
              <Button
                btnIcon={<img src={theme} alt="btnTheme" />}
                handleClick={navbarClick}
              />
          </div>
        </div>
      </div>
      <Menu />
      
    </div>
  );
};

export default Narbar;