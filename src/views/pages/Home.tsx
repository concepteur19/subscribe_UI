import React, { useContext, useEffect, useState } from "react";
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
import dollar from "@/src/assets/images/png/$.png"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
  DialogFooter,
} from "../components/ui/dialog";
import { PiCheck } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import subscribe from "../../assets/images/subscribeIcon.svg";
import { Link } from "react-router-dom";
import SubscriptionController from "../../controllers/subscription/SubscriptionController";
import UserContext from "../../contexts/userDataContext";
import Subscription from "@/src/models/Subscription.model";

const Home = () => {
  const { id } = useContext(UserContext)!;
  const { screenSize } = useContext(ScreenSizeContext)!;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true);
  const [subscriptions, setUserSubscription] = useState<Subscription[]>([]);
  const [isDataReturn, setIsDataReturn] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserSubsciptions = async () => {
      const response = await SubscriptionController.getUserSubscriptions(id!);

      console.log("user subscription", response);
      setUserSubscription(response.data!);
      if (response.data?.length! > 0) {
        console.log("data sup 0");
        setIsDataReturn(true);
      }
    };

    fetchUserSubsciptions();
  }, [id]);

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div
          className={`fixed inset-0 z-50 bg-[#050511] bg-opacity-0 backdrop-blur-[6px] ${
            isDialogOpen ? "block" : "hidden"
          }`}
        ></div>
        {/* <DialogTrigger className=" bg-primary-0 p-4 rounded-lg">
          Open
        </DialogTrigger> */}
        <DialogContent className="text-[#ffffff] bg-[#0B0C26] border border-[#303163] rounded-3xl ">
          <DialogHeader>
            <DialogTitle className="text-2xl font-russOne font-normal text-white-2 text-center flex flex-col items-center space-y-4 ">
              <div className="p-[23px] rounded-full bg-[#4649E512] ">
                <img src={subscribe} alt="Logo" />
              </div>
              <h1>SubScribe Tracker</h1>
            </DialogTitle>

            <div className=" space-y-6">
              <div className="flex justify-between items-center">
                <div className=" flex space-x-1 sm:space-x-4">
                  <img src={netflix} alt="" />
                  <div className=" flex flex-col space-y-[6px]">
                    <span className="text-[16px]">Netflix</span>
                    <div className=" text-[13px] space-x-2 ">
                      <span className=" text-[#9898AA] ">Due date :</span>{" "}
                      <span className=" text-[#F01A16]">15/04/2024</span>
                    </div>
                  </div>
                </div>

                <div className=" font-redRose  space-x-2 space-y-2 sm:space-y-0 flex flex-col sm:flex-row  items-center">
                  <Button
                    btnText="text-[16px] text-[#9898AA] items-start space-x-[6px]"
                    buttonText="Rejected"
                    btnIcon={<RxCross2 size={14} />}
                  />
                  <Button
                    btnText="text-[16px] text-[#625AFA] items-start space-x-[6px]"
                    buttonText="Done"
                    btnIcon={<PiCheck size={14} />}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className=" flex space-x-1 sm:space-x-4">
                  <img src={spotify} alt="" />
                  <div className=" flex flex-col space-y-[6px]">
                    <span className="text-[16px]">Spotify</span>
                    <div className=" text-[13px] space-x-2 ">
                      <span className=" text-[#9898AA] ">Due date :</span>{" "}
                      <span className=" text-[#F01A16]">15/04/2024</span>
                    </div>
                  </div>
                </div>

                <div className=" font-redRose  space-x-2 space-y-2 sm:space-y-0 flex flex-col sm:flex-row justify-end items-center">
                  <Button
                    btnText="text-[16px] text-[#9898AA] items-start space-x-[6px]"
                    buttonText="Rejected"
                    btnIcon={<RxCross2 size={14} />}
                  />
                  <Button
                    btnText="text-[16px] text-[#625AFA] items-start space-x-[6px]"
                    buttonText="Done"
                    btnIcon={<PiCheck size={14} />}
                  />
                </div>
              </div>
            </div>
          </DialogHeader>
          <DialogFooter className="w-full">
            <Button
              buttonText="Confirm"
              btnBorder=" rounded-[6px] border-none"
              btnBg=" bg-white-2 "
              btnP="p-4 py-[10px]"
              btnText=" text-primary-0 font-redRoseBold text-[16px] justify-center "
              handleClick={() => setIsDialogOpen(false)}
            />

            <DialogDescription className=" font-redRose font-light text-sm text-white-2 text-center">
              By clicking Confirm, you approve all these subscriptions. This
              action is irreversible.
            </DialogDescription>
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
                      <CardLatestPayment key={i + "LP"} />
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
                {subscriptions.map((subscription, index) => {
                  return (
                    <CardOverview
                      key={index + "-" + subscription.service_name}
                      due={8}
                      imgSrc={ subscription.logo ? 'http://localhost:8000/storage/'+subscription.logo : dollar}
                      sizelogo={!subscription.logo ? 12 : undefined}
                      subscriName={subscription.service_name!}
                      price={subscription.amount!}
                      dMy={subscription.cycle}
                      typePlan={subscription.type}
                      id={subscription.id}
                    />
                  );
                })}
                {/* {Array.from({ length: 8 }).map((_, i) => (
                  <CardOverview
                    key={i + "$"}
                    due={8}
                    imgSrc={netflix}
                    subscriName="Netflix"
                    price={8.36}
                    dMy="Year"
                    typePlan="Basic Plan"
                    id={i}
                  />
                ))} */}
              </div>
            ) : (
              <div className=" flex flex-col items-center justify-center pt-28 space-y-11 ">
                <p className=" font-redRoseBold text-[16px] text-[#808080]">
                  You don’t have any subscriptions now.
                </p>
                <Link to="/home/addSubscription">
                  <Button
                    btnBg=" bg-[#ffffff] "
                    btnText=" text-black-0 font-redRoseBold"
                    btnP="py-[6.5px] px-9 "
                    btnBorder=" border border-primary-0 rounded"
                    buttonText="Add subscription"
                    btnClass=""
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
