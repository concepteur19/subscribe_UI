import React, { useContext, useEffect, useState } from "react";
import "../../styles/card-circle-gradient.css";
import CardLatestPayment from "../components/basis/home_basis/card-latest-payment";
import CardAmountSpent from "../components/basis/home_basis/card-amount-spent";
import NavHome from "../components/basis/home_basis/nav-home";
import CardOverview from "../components/basis/home_basis/card-overview";

import emptyM from "../../assets/images/png/emptymobile.png";
import empty from "../../assets/images/png/empty.png";
// import netflix from "../../assets/images/png/netflix.png";
// import spotify from "../../assets/images/png/spotify.png";

import Button from "../components/basis/buttons/Button";
import ScreenSizeContext from "@/src/contexts/screenSizeContext";
import dollar from "@/src/assets/images/png/$.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { PiCheck } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import subscribe from "../../assets/images/subscribeIcon.svg";
import { Link, useLocation } from "react-router-dom";
import SubscriptionController from "../../controllers/subscription/SubscriptionController";
import UserContext from "../../contexts/userDataContext";
import Subscription from "@/src/models/Subscription.model";
import NotifPush from "../components/basis/home_basis/notif-push";
import NotificationController from "@/src/controllers/notification/NotificationController";
import getDaysDifference from "@/src/lib/dayDifference";

const Home = () => {
  const { id } = useContext(UserContext)!;
  const { screenSize } = useContext(ScreenSizeContext)!;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [payments$, setPayment] = useState<any[]>([]);
  const [notifPushs, setNotifPush] = useState<any[]>([]);
  const [amountSpent, setAmounSpent] = useState<string>();
  const [subscriptions, setUserSubscription] = useState<Subscription[]>([]);
  const [isDataReturn, setIsDataReturn] = useState<boolean>(false);
  const [filteredSubscriptions, setFilteredSubscriptions] = useState<
    Subscription[]
  >([]);
  const [upcomingSubscriptions, setUpcomingSubscriptions] = useState<
    Subscription[]
  >([]);

  const [isActive, setActive] = useState<boolean>(true);
  const location = useLocation();

  const today = new Date();

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (!isActive) {
      const upcomingSubscriptions = subscriptions
        .filter((subscription) => {
          return getDaysDifference(today, subscription.end_on!) <= 7;
        })
        .sort((a, b) => {
          const dayDiffA = getDaysDifference(today, new Date(a.end_on!));
          const dayDiffB = getDaysDifference(today, new Date(b.end_on!));
          return dayDiffA - dayDiffB;
        });
      setFilteredSubscriptions(upcomingSubscriptions);
    } else {
      setFilteredSubscriptions(subscriptions);
    }
  }, [isActive, subscriptions]);

  useEffect(() => {
    if (
      location.pathname === "/home" ||
      location.pathname === "/home/overview"
    ) {
      setActive(true);
    } else if (location.pathname === "/home/upcoming") {
      setActive(false);
    }
  }, [location.pathname]);

  const handleNavClick = (path: string): void => {
    setActive(path === "/home/overview");
  };

  // const getDaysDifference = (date1: Date, date2: Date): number => {
  //   const oneDay = 24 * 60 * 60 * 1000;
  //   const endOnDate = new Date(date2);
  //   return Math.round(
  //     Math.abs((endOnDate.getTime() - date1.getTime()) / oneDay)
  //   );
  // };

  const handleApproveClick = async (notificationId: number) => {
    try {
      await NotificationController.updateNotification("approuved", notificationId);
      await fetchUserData(); // Rafraîchir les données après mise à jour
      alert('Paiement approuvé');
    } catch (error) {
      console.error("Error approving payment:", error);
    }
  };

  const handleRejectClick = async (notificationId: number) => {
    const confirmReject = window.confirm('Êtes-vous sûr de vouloir rejeter ce paiement ?');
    if (confirmReject) {
      try {
        await NotificationController.updateNotification("rejected", notificationId);
        await fetchUserData(); // Rafraîchir les données après mise à jour
        alert('Paiement rejeté');
      } catch (error) {
        console.error("Error rejecting payment:", error);
      }
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await SubscriptionController.getUserSubscriptions(id!);

      setIsDataReturn(response.data?.subscriptions.length! > 0);
      setUserSubscription(response.data?.subscriptions);
      setFilteredSubscriptions(response.data?.subscriptions);
      setPayment(response.data?.payments);
      setAmounSpent(response.data?.totalAmount);
      setNotifPush(response.data?.notificationsToPush);
      setIsDialogOpen(response.data!.notificationsToPush.length > 0 ? true : false);
      // console.log("push", response.data!);

      localStorage.setItem("payments", JSON.stringify(response.data?.payments));

      const subscriptionTopFilter = response.data!.subscriptions.filter((subscription: Subscription) => {
        const daysDifference = getDaysDifference(today, subscription.end_on!);
        return daysDifference <= 7;
      }).sort((a: Subscription, b: Subscription) => {
        const dayDiffA = getDaysDifference(today, new Date(a.end_on!));
        const dayDiffB = getDaysDifference(today, new Date(b.end_on!));
        return dayDiffA - dayDiffB;
      });

      setUpcomingSubscriptions(subscriptionTopFilter);

    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  };  

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div
          className={`fixed inset-0 z-50 bg-[#050511] bg-opacity-0 backdrop-blur-[6px] ${
            isDialogOpen ? "block" : "hidden"
          }`}
        ></div>
        <DialogContent className="text-[#ffffff] bg-[#0B0C26] border border-[#303163] rounded-3xl ">
          <DialogHeader>
            <DialogTitle className="text-2xl font-russOne font-normal text-white-2 text-center flex flex-col items-center space-y-4 ">
              <div className="p-[23px] rounded-full bg-[#4649E512] ">
                <img src={subscribe} alt="Logo" />
              </div>
              <h1>SubScribe Tracker</h1>
            </DialogTitle>
            {notifPushs &&
              notifPushs.map((notif) => {
                return (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <NotifPush notif={notif} />
                      <div className="font-redRose space-x-2 space-y-2 sm:space-y-0 flex flex-col sm:flex-row items-center">
                        <Button
                          btnText="text-[16px] text-[#9898AA] items-start space-x-[6px]"
                          buttonText="Rejected"
                          btnIcon={<RxCross2 size={14} />}
                          handleClick={() => handleRejectClick(notif.id)}
                        />
                        <Button
                          btnText="text-[16px] text-[#625AFA] items-start space-x-[6px]"
                          buttonText="Done"
                          btnIcon={<PiCheck size={14} />}
                          handleClick={() => handleApproveClick(notif.id)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </DialogHeader>
          <DialogFooter className="w-full">
            <Button
              buttonText="Confirm"
              btnBorder="rounded-[6px] border-none"
              btnBg="bg-white-2"
              btnP="p-4 py-[10px]"
              btnText="text-primary-0 font-redRoseBold text-[16px] justify-center"
              handleClick={() => setIsDialogOpen(false)}
            />
            <DialogDescription className="font-redRose font-light text-sm text-white-2 text-center">
              By clicking Confirm, you approve all these subscriptions. This
              action is irreversible.
            </DialogDescription>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="h-screen bg-cover text-white-1 w-full">
        <div className="mx-auto flex flex-1 flex-col sm:flex-row sm:items-start sm:space-x-[46px] items-center justify-center w-full">
          <div className="flex flex-col space-y-3 md:space-y-11 w-full md:w-[46.67%] xl:w-[39.67%] 2xl:w-[36.67%]">
            {screenSize.width < 768 && !isDataReturn ? null : (
              <CardAmountSpent amount={amountSpent} />
            )}
            <div className="block text-[#697386] space-y-6">
              <div className="flex justify-between items-center max-md:hidden">
                <span className="text-[#fff]">Latest payments</span>
                <span>
                  <Link to="/payments">See all</Link>
                </span>
              </div>
              {isDataReturn ? (
                <div className="flex flex-col">
                  <div className="max-sm:hidden space-y-3 sm:mb-3 md:mb-0">
                    {payments$.slice(0, 8).map((payment, index) => (
                      <CardLatestPayment
                        key={index + `-${payment.service_name}`}
                        amount={payment.amount}
                        paymentDate={payment.notif_date}
                        status={payment.notification_status}
                      />
                    ))}
                  </div>
                  {/* Mobile component */}
                  <div className="space-y-3">
                    <div className="md:hidden w-full space-y-4">
                      <h1 className="font-redRoseBold text-[16px] flex justify-between">
                        Upcoming Subscriptions
                        <span>
                          <Link to="/payments">See all</Link>
                        </span>
                      </h1>
                      <div className="flex space-x-4">
                        {upcomingSubscriptions
                          .slice(0, 2)
                          .map((subscription, index) => (
                            <CardOverview
                              key={index + "." + subscription.service_name}
                              positionCard="absolute right-10"
                              flexCard="flex-col justify-center items-start space-y-3"
                              due={getDaysDifference(
                                today,
                                subscription.end_on!
                              )}
                              imgSrc={
                                subscription.logo
                                  ? `http://localhost:8000/storage/${subscription.logo}`
                                  : dollar
                              }
                              sizelogo={!subscription.logo ? 12 : undefined}
                              subscriName={subscription.service_name!}
                              price={subscription.amount!}
                              dMy={subscription.cycle}
                              typePlan={subscription.type}
                              id={subscription.id}
                            />
                          ))}
                      </div>
                    </div>
                    <div className="md:hidden block w-full space-y-4 pb-20">
                      <h1 className="font-redRoseBold text-[16px]">
                        My Subscriptions
                      </h1>
                      <div className="flex flex-col space-y-4">
                        {subscriptions.map((subscription, index) => (
                          <CardOverview
                            key={index + "-" + subscription.service_name}
                            due={getDaysDifference(today, subscription.end_on!)}
                            imgSrc={
                              subscription.logo
                                ? `http://localhost:8000/storage/${subscription.logo}`
                                : dollar
                            }
                            sizelogo={!subscription.logo ? 12 : undefined}
                            subscriName={subscription.service_name!}
                            price={subscription.amount!}
                            dMy={subscription.cycle}
                            typePlan={subscription.type}
                            id={subscription.id}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <hr className="mt-1 mb-11 text-[#303055] max-md:hidden" />
                  <div className="flex flex-col justify-center items-center space-y-4 max-md:mt-48">
                    <img
                      src={screenSize.width > 768 ? empty : emptyM}
                      alt="empty"
                    />
                    <p className="font-redRoseBold text-[16px] text-[#808080]">
                      You don’t have any subscriptions now.
                    </p>
                  </div>
                  <div></div>
                </div>
              )}
            </div>
          </div>
          <div className="max-md:hidden w-[50%] xl:w-[57%] 2xl:w-[60%] space-y-8">
            <NavHome handleNavClick={handleNavClick} />
            {isDataReturn ? (
              <div className="flex flex-col space-y-3">
                {filteredSubscriptions.map((subscription, index) => (
                  <CardOverview
                    key={index + "-" + subscription.service_name}
                    due={getDaysDifference(today, subscription.end_on!)}
                    imgSrc={
                      subscription.logo
                        ? `http://localhost:8000/storage/${subscription.logo}`
                        : dollar
                    }
                    sizelogo={!subscription.logo ? 12 : undefined}
                    subscriName={subscription.service_name!}
                    price={subscription.amount!}
                    dMy={subscription.cycle}
                    typePlan={subscription.type}
                    id={subscription.id}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center pt-28 space-y-11">
                <p className="font-redRoseBold text-[16px] text-[#808080]">
                  You don’t have any subscriptions now.
                </p>
                <Link to="/home/addSubscription">
                  <Button
                    btnBg="bg-[#ffffff]"
                    btnText="text-black-0 font-redRoseBold"
                    btnP="py-[6.5px] px-9"
                    btnBorder="border border-primary-0 rounded"
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
