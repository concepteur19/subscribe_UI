import React from 'react';
import AddSubscriptionComponent from '../../components/basis/subscription_basis/addSubscriptionComponent';
import Netflix from "../../../assets/images/png/netflix.png";

const SubscriptionDetails = () => {

  const detailSubscription = {type: "Premium", cycle: "Monthly", payment:"UPI" , remind: "2 days before"}

  return (
    <AddSubscriptionComponent
      buttonText=' Delete Subscription'
      btnBgColor=' bg-red '
      subscriptionLabel="Netflix"
      amount="8.44"
      dueDate="5"
      cycle="Monthly"
      plan="premium"
      detailSubscription={detailSubscription }
      logo={Netflix}
    />
  );
}

export default SubscriptionDetails;