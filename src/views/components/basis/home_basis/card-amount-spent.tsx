import React from "react";

const CardAmountSpent = () => {
  return (
    <div className=" flex flex-col text-center text-[#E4E4ED] items-center py-[22.5px] px-[158.5px] bg-[#101019] rounded-xl">
      <span className="linear-gratient w-10 h-10 flex items-center justify-center text-[32px] mb-4">
        $
      </span>
      <span className=" text-[28px] mb-2">000.00</span>
      <span className=" text-sm font-redRose">Amount Spent this month</span>
    </div>
  );
};

export default CardAmountSpent;
