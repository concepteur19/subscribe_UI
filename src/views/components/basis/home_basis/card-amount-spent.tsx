import React from "react";

interface AmountSpentProps {
  amount?: string;
}

const CardAmountSpent: React.FC<AmountSpentProps> = ({ amount }) => {
  return (
    <div className="relative flex flex-col text-center items-center py-6 bg-[#0B0B1A] rounded-xl space-y-4">
      <span className="linear-gratient rounded-full w-10 h-10 flex items-center justify-center text-[32px] mb-4 z-20">
        $
      </span>

      <div className="flex flex-col space-y-2 z-20">
        <span className=" text-[28px] mb-2">{amount ? Number.parseFloat(amount).toFixed(3) : "000.00"}</span>
        <span className=" text-sm font-redRose">{amount ? "Amount Spent this month." : "You haven't spent anything this month."}</span>
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
