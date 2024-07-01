import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/card-circle-gradient.css";
import CardAmountSpent from "../components/basis/home_basis/card-amount-spent";
import NavHome from "../components/basis/home_basis/nav-home";
import emptyM from "../../assets/images/png/emptymobile.png";
import empty from "../../assets/images/png/empty.png";
import Button from "../components/basis/buttons/Button";
import ScreenSizeContext from "@/src/contexts/screenSizeContext";
import useFetchUserData from "@/src/hooks/useFetchUserData";
import SubscriptionList from "../components/basis/home_basis/subscription-list";
import CustomDialogContent from "../components/basis/home_basis/dialog-content";
import NotificationController from "@/src/controllers/notification/NotificationController";
import CardLatestPayment from "../components/basis/home_basis/card-latest-payment";

const Home: React.FC = () => {
  const { screenSize } = useContext(ScreenSizeContext)!;
  const {
    isDialogOpen,
    setIsDialogOpen,
    payments$,
    notifPushs,
    amountSpent,
    subscriptions,
    isDataReturn,
    filteredSubscriptions,
    setFilteredSubscriptions,
    upcomingSubscriptions,
    fetchUserData,
    setIsSubscriptionsModified,
  } = useFetchUserData();

  const [isActive, setActive] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    if (!isActive) {
      console.log(upcomingSubscriptions);

      const upcomingSubscriptions$ = filteredSubscriptions;
      setFilteredSubscriptions(upcomingSubscriptions$);
    }
    // else setFilteredSubscriptions(filteredSubscriptions);
  }, [isActive]);

  useEffect(() => {
    if (
      location.pathname === "/home" ||
      location.pathname === "/home/overview"
    ) {
      console.log(true);

      setActive(true);
    } else if (location.pathname === "/home/upcoming") {
      console.log(false);
      setActive(false);
    }
  }, [location.pathname]);

  const handleNavClick = (path: string): void => {
    setActive(path === "/home/overview");
  };

  const handleApproveClick = async (notificationId: number) => {
    try {
      await NotificationController.updateNotification(
        "approuved",
        notificationId
      );
      await fetchUserData();
      setIsSubscriptionsModified(true);
      alert("Paiement approuvé");
    } catch (error) {
      console.error("Error approving payment:", error);
    }
  };

  const handleRejectClick = async (notificationId: number) => {
    const confirmReject = window.confirm(
      "Êtes-vous sûr de vouloir rejeter ce paiement ?"
    );
    if (confirmReject) {
      try {
        await NotificationController.updateNotification(
          "rejected",
          notificationId
        );
        await fetchUserData();
        setIsSubscriptionsModified(true);
        alert("Paiement rejeté");
      } catch (error) {
        console.error("Error rejecting payment:", error);
      }
    }
  };

  return (
    <>
      <CustomDialogContent
        notifPushs={notifPushs}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        handleApproveClick={handleApproveClick}
        handleRejectClick={handleRejectClick}
      />
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
                  <div className="space-y-8">
                    <div className="md:hidden w-full space-y-5">
                      <span className="font-redRoseBold text-[16px] flex justify-between">
                        <Link to="/payments">See all payments </Link>
                      </span>
                      {upcomingSubscriptions.length > 0 && (
                        <>
                          <h1 className="font-redRoseBold text-[16px] flex justify-between">
                            Upcoming Subscriptions
                          </h1>
                          <SubscriptionList
                            subscriptions={upcomingSubscriptions}
                          />
                        </>
                      )}
                    </div>
                    <div className="md:hidden block w-full space-y-5 pb-20">
                      <h1 className="font-redRoseBold text-[16px]">
                        My Subscriptions
                      </h1>
                      <SubscriptionList subscriptions={subscriptions} />
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
                {isActive ? (
                  <SubscriptionList subscriptions={filteredSubscriptions} />
                ) : (
                  <SubscriptionList subscriptions={upcomingSubscriptions} />
                )}
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
