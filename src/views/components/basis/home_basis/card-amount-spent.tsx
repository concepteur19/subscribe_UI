import React from "react";

interface AmountSpentProps {
  amount?: number;
}

const CardAmountSpent: React.FC<AmountSpentProps> = ({ amount }) => {
  return (
    // <div className=" flex flex-col text-center text-[#E4E4ED] items-center py-[22.5px] px-[158.5px] bg-[#101019] rounded-xl">
    //   <span className="linear-gratient w-10 h-10 flex items-center justify-center text-[32px] mb-4">
    //     $
    //   </span>
    //   <span className=" text-[28px] mb-2">{amount? amount : "000.00"}</span>
    //   <span className=" text-sm font-redRose">Amount Spent this month</span>
    // </div>
    <div className="relative flex flex-col text-center items-center py-6 bg-[#101019] rounded-xl space-y-4">
      <span className="linear-gratient rounded-full w-10 h-10 flex items-center justify-center text-[32px] mb-4 z-20">
        $
      </span>

      <div className="flex flex-col space-y-2 z-20">
        <span className=" text-[28px] mb-2">{amount ? amount : "000.00"}</span>
        <span className=" text-sm font-redRose">Amount Spent this month</span>
      </div>


      <div className="bg-gray-100 absolute bottom-0 right-0 h-full z-10">
        <div className="grid grid-cols-10 gap-x-8 h-full opacity-50">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-full border linear-gratient-card opacity-10"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardAmountSpent;
