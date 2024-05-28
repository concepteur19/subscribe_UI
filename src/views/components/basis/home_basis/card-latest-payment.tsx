import React from "react";
import CardApproved from "./card-approved";

const CardLatestPayment = () => {
  
  
  return (
    <div className=" text-sm rounded-xl bg-[#0B0B1A] py-[14.5px] px-2 lg:px-4 flex justify-around items-center ">
      {/* <div className=" flex items-center">
        <input
          className=" rounder-[2px] border-[#C0C8D2] w-[14px] h-[14px]"
          type="checkbox"
          name=""
          id=""
        />
      </div> */}

      <div className="flex space-x-2 ">
        <span className=" text-[#fff]">$24.00</span>
        <span className=" ">USD</span>
      </div>
      <div className=" ">
        <CardApproved />
      </div>
      <span className="card">2 May, 2023</span>
    </div>
  );
};

export default CardLatestPayment;
