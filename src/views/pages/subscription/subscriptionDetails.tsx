import React from 'react';
import AddSubscriptionComponent from '../../components/basis/subscription_basis/addSubscriptionComponent';

const SubscriptionDetails = () => {
  return (
    <AddSubscriptionComponent
      subscriptionLabel="Netflix"
      amount="8.44"
      dueDate="5"
      cycle="Monthly"
      plan="premium"
    />
  );
}

export default SubscriptionDetails;