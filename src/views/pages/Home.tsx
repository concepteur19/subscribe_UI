import React, { useContext } from "react";
import "../../styles/card-circle-gradient.css";
import CardLatestPayment from "../components/basis/home_basis/card-latest-payment";
import CardAmountSpent from "../components/basis/home_basis/card-amount-spent";
import NavHome from "../components/basis/home_basis/nav-home";
import CardOverview from "../components/basis/home_basis/card-overview";

import emptyM from "../../assets/images/png/emptymobile.png";
import empty from "../../assets/images/png/empty.png";
import netflix from "../../assets/images/png/netflix.png";
import spotify from "../../assets/images/png/spotify.png";

import Button from "../components/basis/buttons/Button";
import ScreenSizeContext from "../../contexts/screenSizeContext";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../components/ui/dialog";
import { PiCheck } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const Home = () => {
  const { screenSize } = useContext(ScreenSizeContext)!;

  const isDataReturn = true;

  return (
    <>
      <Dialog>
        <DialogTrigger className=" bg-primary-0 p-4 rounded-lg" >Open</DialogTrigger>
        <DialogContent className="text-[#2F384F]">
          <DialogHeader>
            <DialogTitle className=" font-redRoseBold text-xl ">Hollupppp!!!</DialogTitle>
            <DialogDescription className=" font-redRose text-sm py-3">
            You are in serious action now. Be careful before you delete this field. It will be disappear at universe, forever.
            </DialogDescription>

            <div className="flex justify-between items-center py-4">
              <div className=" flex space-x-4">
                <img src={netflix} alt="" />
                <div className=" flex flex-col space-y-[6px]">
                  <span className="text-[16px]">Netflix</span>
                  <div className=" text-[13px] space-x-2 ">
                    <span className=" text-[#9898AA] ">Due date:</span> <span className=" text-red">15/04/2024</span>
                  </div>
                </div>
              </div>

              <div className=" space-x-2 flex">
                <Button 
                  buttonText="Rejected"
                  btnIcon={<RxCross2 />}
                />
                <Button 
                  buttonText="Done"
                  btnIcon={<PiCheck />}
                />
              </div>
            </div>

            <div className="flex justify-between items-center py-4">
              <div className=" flex space-x-4">
                <img src={spotify} alt="" />
                <div className=" flex flex-col space-y-[6px]">
                  <span className="text-[16px]">Spotify</span>
                  <div className=" text-[13px] space-x-2 ">
                    <span className=" text-[#9898AA] ">Due date:</span> <span className=" text-red">15/04/2024</span>
                  </div>
                </div>
              </div>

              <div className=" space-x-2 flex">
              <Button 
                  buttonText="Rejected"
                  // btnClass=" flex "
                  btnIcon={<RxCross2 />}
                />
                <Button 
                  buttonText="Done"
                  btnIcon={<PiCheck />}
                />
              </div>
            </div>

          </DialogHeader>
          <DialogFooter>
            <Button 
              buttonText="Confirm"
              btnBorder=" rounded border-none"
              btnBg=" bg-primary-0 "
              btnP="px-4 py-1"
              btnText=" text-[#f2f2f2] font-redRoseBold text-[16px] "
            />
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className=" h-screen  bg-cover text-white-1 w-full ">
        <div className=" mx-auto flex flex-1 flex-col sm:flex-row sm:items-start sm:space-x-[46px] items-center justify-center w-full">
          <div className="flex flex-col space-y-3 md:space-y-11 w-full  md:w-[46.67%] xl:w-[39.67%] 2xl:w-[36.67%] ">
            {screenSize.width < 768 && !isDataReturn ? null : (
              <CardAmountSpent />
            )}

            <div className=" block text-[#697386] space-y-6 ">
              <div className=" flex justify-between items-center max-md:hidden">
                <span className=" text-[#fff] ">Latest payments</span>
                <span>See all</span>
              </div>

              {isDataReturn ? (
                <div className=" flex flex-col ">
                  <div className=" max-sm:hidden space-y-3 sm:mb-3 md:mb-0">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <CardLatestPayment />
                    ))}
                  </div>

                  {/* Mobile component */}
                  <div className="space-y-3">
                    <div className="md:hidden w-full space-y-4">
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
                            id={i}
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
                            id={i}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <hr className="mt-1 mb-11 text-[#303055] max-md:hidden" />

                  <div className=" flex flex-col justify-center items-center space-y-4 max-md:mt-48">
                    <img
                      src={screenSize.width > 768 ? empty : emptyM}
                      alt="empty"
                    />
                    <p className=" font-redRoseBold text-[16px] text-[#808080] ">
                      You don’t have any subscriptions now.
                    </p>
                  </div>
                  <div></div>
                </div>
              )}
            </div>
          </div>

          <div className=" max-md:hidden w-[50%] xl:w-[57%] 2xl:w-[60%]  space-y-8">
            <NavHome />

            {isDataReturn ? (
              <div className="flex flex-col space-y-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <CardOverview
                    due={8}
                    imgSrc={netflix}
                    subscriName="Netflix"
                    price={8.36}
                    dMy="Year"
                    typePlan="Basic Plan"
                    id={i}
                  />
                ))}
              </div>
            ) : (
              <div className=" flex flex-col items-center justify-center pt-28 space-y-11 ">
                <p className=" font-redRoseBold text-[16px] text-[#808080]">
                  You don’t have any subscriptions now.
                </p>

                <Button
                  btnBg=" bg-[#ffffff] "
                  btnText=" text-black-0 font-redRoseBold"
                  btnP="py-[6.5px] px-9 "
                  btnBorder=" border border-primary-0 rounded"
                  buttonText="Add subscription"
                  btnClass=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
