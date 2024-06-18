import React from "react";
import CardStatus from "./card-approved";

// Définir les types des props
interface CardLatestPaymentProps {
  amount: number;
  paymentDate: string;
  isApproved: boolean;
}

const CardLatestPayment: React.FC<CardLatestPaymentProps> = ({
  amount,
  paymentDate,
  isApproved,
}) => {
  return (
    <div className="text-sm rounded-xl bg-[#0B0B1A] py-[14.5px]  px-2 lg:px-4 flex justify-around items-center">
      {/* Affichage du montant et de la devise */}
      <div className="flex space-x-2 w-[23%] ">
        <span className="text-[#fff]">${amount.toFixed(2)}</span>
        <span>USD</span>
      </div>

      {/* Affichage de l'état de l'approbation */}
      <div className="w-[23%] flex justify-center items-center ">
        <CardStatus isApproved={isApproved} /> 
      </div>

      {/* Affichage de la date de paiement */}
      <div className="card w-[23%]  flex justify-end items-center">{paymentDate}</div>
    </div>
  );
};

export default CardLatestPayment;
