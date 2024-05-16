import React from "react";
import AddSubscriptionComponent from "../../components/basis/subscription_basis/addSubscriptionComponent";
import Netflix from "../../../assets/images/png/netflix.png";

const AddSubscriptionParam = () => {
  return (
    <AddSubscriptionComponent
      subscriptionLabel="Netflix"
      logo={Netflix}
      buttonText="Add Subscription"
      btnBgColor=" bg-primary-0"
    />
  );
};

export default AddSubscriptionParam;
