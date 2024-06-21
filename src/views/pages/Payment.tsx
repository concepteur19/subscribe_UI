import React, { useEffect, useState } from "react";
import CardLatestPayment from "../components/basis/home_basis/card-latest-payment";

function Payment() {
  const [payments, setPayment] = useState<any[]>([]);

  useEffect(() => {
    const payments$ = localStorage.getItem("payments");
    payments$ && setPayment(JSON.parse(payments$));
  }, []);

  return (
    <div className="flex flex-col w-full space-y-5 sm:px-16 md:px-20 lg:px-28 xl:px-[13%] 2xl:px-[17%]">
      <h1>All Payments</h1>
      <div className="grid md:grid-flow-row md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  gap-5 ">
        {payments.map((payment, index) => (
          <CardLatestPayment
            key={index + `-${payment.service_name}`}
            amount={payment.amount}
            paymentDate={payment.notif_date}
            status={payment.notification_status}
          />
        ))}
      </div>
    </div>
  );
}

export default Payment;
