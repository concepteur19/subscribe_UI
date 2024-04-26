import React from "react";
import "../../styles/card-circle-gradient.css";
import CardLatestPayment from "../components/basis/home_basis/card-latest-payment";
import CardAmountSpent from "../components/basis/home_basis/card-amount-spent";
import NavHome from "../components/basis/home_basis/nav-home";
import CardOverview from "../components/basis/home_basis/card-overview";


let netflix = require("../../assets/images/png/netflix.png") as any;

const Home = () => {
  return (
    <>
      <div className=" h-screen  bg-cover text-white-1 w-full ">
        <div className=" mx-auto flex flex-1 flex-col sm:flex-row sm:items-start sm:space-x-[46px] items-center justify-center w-full">
          <div className="flex flex-col space-y-6 md:space-y-10 w-full  md:w-[46.67%] xl:w-[39.67%] 2xl:w-[36.67%] ">
            <CardAmountSpent />

            <div className="max-sm:hidden block text-[#697386] ">
              <div className=" flex justify-between items-center pb-6">
                <span className=" text-[#fff] ">Latest payments</span>
                <span>See all</span>
              </div>

              <div className=" flex flex-col space-y-3">
                {Array.from({ length: 7 }).map((_, i) => (
                  <CardLatestPayment />
                ))}
              </div>
            </div>

            {/* Mobile component */}
            <div className="md:hidden block w-full space-y-4">
              <h1 className=" font-redRoseBold text-[16px]">
                Upcoming Payments
              </h1>
              <div className="flex space-x-4">
                {Array.from({ length: 2 }).map((_, i) => (
                  <CardOverview
                    positionCard=" absolute right-10 "
                    flexCard=" flex-col justify-center items-start space-y-3"
                    due={8}
                    imgSrc={netflix}
                    subscriName="Netflix"
                    price={8.36}
                    dMy="Year"
                  />
                ))}
              </div>
            </div>

            <div className="md:hidden block w-full space-y-4">
              <h1 className=" font-redRoseBold text-[16px]">
                My Subscriptions
              </h1>
              <div className="flex flex-col space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <CardOverview
                    due={8}
                    imgSrc={netflix}
                    subscriName="Netflix"
                    price={8.36}
                    dMy="Year"
                  />
                ))}
              </div>
            </div>
            {/* Mobile component */}
          </div>

          <div className=" max-md:hidden w-[50%] xl:w-[57%] 2xl:w-[60%]  space-y-8">
            <NavHome />

            <div className="flex flex-col space-y-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <CardOverview
                  due={8}
                  imgSrc={netflix}
                  subscriName="Netflix"
                  price={8.36}
                  dMy="Year"
                  typePlan="Basic Plan"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
