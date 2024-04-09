import React from "react";
import "../../styles/card-circle-gradient.css";
import CardLatestPayment from "../components/basis/home_basis/card-latest-payment";
import CardAmountSpent from "../components/basis/home_basis/card-amount-spent";

const Home = () => {
  return (
    <div className="flex items-start space-x-[46px]">
      <div className="flex flex-col space-y-[42px]">
        <CardAmountSpent />
        <div className=" block text-[#697386] ">
          <div className=" flex justify-between items-center pb-6">
            <span className=" text-[#fff] ">Latest payments</span>
            <span>See all</span>
          </div>

          <div className=" flex flex-col space-y-3">
            <CardLatestPayment />
            <CardLatestPayment />
            <CardLatestPayment />
            <CardLatestPayment />
            <CardLatestPayment />
          </div>
        </div>
      </div>

      <div className=" left">
        <div className="nav"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Home;
