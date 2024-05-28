import React, { useContext } from "react";
import profilePhoto from "../../assets/images/png/profilePhoto.png";
import profileM from "../../assets/images/png/ProfileM.png";
import InputDiv from "../components/basis/inputDiv";
import Button from "../components/basis/buttons/Button";
import ScreenSizeContext from "../../contexts/screenSizeContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Setting() {
  const { screenSize } = useContext(ScreenSizeContext)!;

  const navigate = useNavigate();

  const handleLogout = async () => {
    
    
    try {
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:8000/api/logout', {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        localStorage.removeItem('token');

        navigate('/Login');

    } catch (error) {
        console.error('Logout error', error);
    }
};


  return (
    <div className=" w-full md:space-y-12 ">
      <div className=" bg-gradient-to-b from-[#4649E566] via-[#24132f] to-[#F2474700] md:bg-none py-16 md:py-0 flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 sm:space-x-3 sm:px-24 md:px-28 lg:px-36 xl:px-[25%] 2xl:px-[30%]">
        <span className=" w-32 h-32 md:w-[58px] md:h-[58px] rounded-full">
          <img src={screenSize.width > 768 ? profileM : profilePhoto} alt="" />
        </span>
        <h1 className=" font-redRoseBold text-white-1 md:text-[22px] text-2xl">
          Zain Williamson
        </h1>
      </div>

      <div className=" space-y-6 lg:space-y-10 p-6 sm:px-24 md:px-28 lg:px-36 xl:px-[25%] 2xl:px-[30%] ">
        <div className=" space-y-4">
          <h1 className=" pb-2">My account</h1>
          <InputDiv label="Email">
            <div className=" text-[16px]">zobel.tchomgui@gmail.com</div>
          </InputDiv>

          <InputDiv label="Phone">
            <div className=" text-[16px]">+237 697 45 19 79</div>
          </InputDiv>
        </div>

        <div className=" space-y-4">
          <h1 className=" pb-2">Support</h1>
          <InputDiv>
            <div className=" text-[16px] ">Contact support</div>
          </InputDiv>

          <InputDiv>
            <div className="text-[16px]">Support creators</div>
          </InputDiv>
        </div>
      </div>

      <div className="fixed md:relative bottom-0 left-0 flex justify-center md:justify-start items-center p-6 w-full sm:px-24 md:px-28 lg:px-36 xl:px-[25%] 2xl:px-[30%] ">
        <Button
          buttonText="Logout"
          btnClass="w-full md:w-[134px] flex items-center justify-center"
          btnP=" px-auto py-[14px]"
          btnBorder=" rounded-xl "
          btnText=" text-[16px] font-redRoseBold "
          btnBg=" bg-red"
          handleClick={handleLogout}
        />
      </div>
    </div>
  );
}

export default Setting;
