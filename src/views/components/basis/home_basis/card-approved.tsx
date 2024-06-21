// import React from "react";

// const CardApproved = () => {
//   return (
//     <div
//       className=" bg-[#D7F7C2] rounded text-xs px-[6px] flex space-x-1 items-center w-fit"
//     >
//       <span className=" text-[#006908]">Approved</span>
//       <span className=" w-3 h-3 bg-[#228403] text-[#D7F7C2] flex items-center justify-center rounded-sm text-[10px] "> i </span>
//     </div>
//   );
// };

// export default CardApproved;


import React from "react";

// Définir les types des props
interface CardStatusProps {
  statusText: string;
}

const CardStatus: React.FC<CardStatusProps> = ({ statusText }) => {
  // console.log("status", statusText);
  // Définir le texte et les couleurs en fonction du statut
  // const statusText = "Approved" || "Rejected" || "pending";
  const bgColor = statusText === "approuved" ? "bg-[#D7F7C2]" : statusText === "rejected"? "bg-[#FBC4C3]" : "bg-[#C2D7F7]" ;
  const textColor = statusText === "approuved" ? "text-[#006908]" : statusText === "rejected"? "text-[#F01A16]" : "text-[#311AF0]" ;
  const iconBgColor = statusText === "approuved" ? "bg-[#006908]" : statusText === "rejected"? "bg-[#F01A16]" : "bg-[#311AF0]" ;
  const iconColor = statusText === "approuved" ? "text-[#D7F7C2]" : statusText === "rejected"? "text-[#FBC4C3]" : "text-[#C2D7F7]" ;
  
  return (
    <div className={`rounded text-xs px-[6px] flex space-x-1 items-center ${bgColor}`}>
      <span className={`${textColor}`}>{statusText === "approuved" || statusText === "rejected" || statusText === "false" ? statusText : "Pending"  }</span>
      <span className={`w-3 h-3 ${iconColor} ${iconBgColor}  flex items-center justify-center rounded text-xs my-[3px] `}>
        i
      </span>
    </div>
  );
};

export default CardStatus;
