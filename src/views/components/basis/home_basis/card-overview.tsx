import React from "react";
import LogoCard from "../logoCard";
import { Link } from "react-router-dom";

interface CardOverviewProps {
  due: number;
  imgSrc: string;
  subscriName: string;
  price: number;
  dMy: string;
  positionCard?: string;
  flexCard?: string;
  typePlan?: string;
  id?: number;
}

const CardOverview: React.FC<CardOverviewProps> = ({
  due,
  imgSrc,
  subscriName,
  price,
  dMy,
  positionCard,
  flexCard,
  typePlan,
  id
}) => {
  return (
    <div
      className={`relative text-sm text-white-1 font-redRoseBold rounded-xl p-4 xl:pr-[44.56px] md:py-[14.5px] flex justify-between lg:items-center  m-0 w-full ${
        positionCard ? " bg-black-2" : "linear-gratient-card"
      }`}
    >
      <div className={`flex ${flexCard ? flexCard : "space-x-3 items-center"}`}>
        <Link to={`/home/subscription/${id? id : 1}`}>
          {" "}
          <span className=" cursor-pointer">
            <LogoCard imgSrc={imgSrc} />
          </span>
        </Link>

        <div
          className={`flex flex-col sm:flex-row xl:flex-row sm:space-x-20 md:space-x-3 xl:space-x-16 2xl:space-x-20 sm:space-y-0 xl:space-y-0   ${
            positionCard ? "space-y-1" : "space-y-[6px]"
          }`}
        >
          <span className=" text-[16px] ">{subscriName} </span>
          <span className=" font-redRoseLight text-white-0">
            Due in <span className=" font-redRoseBold text-white-1">{due}</span>{" "}
            days
          </span>
        </div>
      </div>

      <div className=" max-lg:hidden">
        <span className="text-[16px]">$ {price}</span>
      </div>

      <div className=" max-lg:hidden">
        <span className=" font-redRoseLight text-white-0">{typePlan}</span>
      </div>

      <div className={`flex flex-col space-y-[6px] ${positionCard}`}>
        <span className="text-[16px]">$ {price}</span>
        <span className=" font-redRoseLight text-white-1">/{dMy} </span>
      </div>
    </div>
  );
};

export default CardOverview;
