import React from "react";
import AddSubscriptionComponent from "../../components/basis/subscription_basis/addSubscriptionComponent";

const AddCustomSubscription = () => {
  return (
    <AddSubscriptionComponent
      subscriptionLabel={
        <>
          Create a customize
          <br />
          subscription
        </>
      }
      buttonText="Add Subscription"
      btnBgColor=" bg-primary-0"
    />
  );
};

export default AddCustomSubscription;
