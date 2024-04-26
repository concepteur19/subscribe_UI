import React from "react";
import LogoCard from "../logoCard";
import { PiPlus, PiPlusCircleFill } from "react-icons/pi";

interface CardSubscriptionProps {
  subscriName: string;
  imgSrc: string;
}

const CardSubscription: React.FC<CardSubscriptionProps> = ({
  imgSrc,
  subscriName,
}) => {
  return (
    <div
      className={`flex justify-between items-center text-sm text-white-1 font-redRoseBold rounded-xl p-4 xl:pr-5 md:py-[14.5px]   m-0 w-full
        linear-gratient-card`}
    >
      <div className={`flex space-x-3 items-center`}>
        <LogoCard imgSrc={imgSrc} />
        <span className=" text-[16px] ">{subscriName} </span>
      </div>

      <span className="cursor-pointer bg-black-2 text-[#ffffff] flex p-2 rounded-full items-center justify-center">
        <PiPlus size={16} />
      </span>
    </div>
  );
};

export default CardSubscription;
