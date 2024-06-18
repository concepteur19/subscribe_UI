import React from "react";
import CardLatestPayment from "../components/basis/home_basis/card-latest-payment";

function Payment() {
  return (
    <div className="flex flex-col w-full space-y-5 sm:px-16 md:px-20 lg:px-28 xl:px-[13%] 2xl:px-[17%]">
      <h1>All Payments</h1>
      <div className="grid md:grid-flow-row md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  gap-5 ">
        {Array.from({ length: 7 }).map((_, i) => (
          <CardLatestPayment key={i + "-LP"} />
        ))}
      </div>
    </div>
  );
}

export default Payment;
