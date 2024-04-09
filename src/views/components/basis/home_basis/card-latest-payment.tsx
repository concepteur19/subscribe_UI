import React from "react";
import CardApproved from "./card-approved";

const CardLatestPayment = () => {
  return (
    <div className="text-sm rounded-xl bg-[#101019] py-[14.5px] flex justify-center items-center ">
      <input
        className=" rounder-[2px] border-[#C0C8D2] w-[14px] h-[14px]"
        type="checkbox"
        name=""
        id=""
      />

      <div className="flex space-x-2 ml-10">
        <span className=" text-[#fff]">$24.00</span>
        <span className=" ">USD</span>
      </div>
      <div className=" ml-[57.3px] mr-[78px] ">
        <CardApproved />
      </div>
      <span className="card">2 May, 2023</span>
    </div>
  );
};

export default CardLatestPayment;
