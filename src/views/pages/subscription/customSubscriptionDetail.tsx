import React from "react";
import AddSubscriptionComponent from "../../components/basis/subscription_basis/addSubscriptionComponent";

const CustomSubscriptionDetail = () => {
  const detailSubscription = {
    type: "Premium",
    cycle: "Monthly",
    payment: "UPI",
    remind: "2 days before",
    end_on: "12 Dec 2000"
  };

  return (
    <AddSubscriptionComponent
      subscriptionLabel="Fly-io"
      sizeLogo={14}
      buttonText=" Delete Subscription"
      btnBgColor=" bg-red "
      amount="8.44"
      dueDate="5"
      cycle="Monthly"
      planDetail="premium"
      detailSubscription={detailSubscription}
    />
  );
};

export default CustomSubscriptionDetail;
