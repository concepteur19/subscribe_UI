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
  isApproved: boolean;
}

const CardStatus: React.FC<CardStatusProps> = ({ isApproved }) => {
  // Définir le texte et les couleurs en fonction du statut
  const statusText = isApproved ? "Approved" : "Rejected";
  const bgColor = isApproved ? "bg-[#D7F7C2]" : "bg-[#F7C2C2]";
  const textColor = isApproved ? "text-[#006908]" : "text-[#690800]";
  const iconColor = isApproved ? "bg-[#228403]" : "bg-[#840303]";
  
  return (
    <div className={`rounded text-xs px-[6px] flex space-x-1 items-center w-fit ${bgColor}`}>
      <span className={`${textColor}`}>{statusText}</span>
      <span className={`w-3 h-3 ${iconColor} text-[#D7F7C2] flex items-center justify-center rounded-sm text-[10px]`}>
        i
      </span>
    </div>
  );
};

export default CardStatus;
