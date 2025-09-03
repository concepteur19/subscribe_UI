import React from 'react';
import Subscription from '@/src/models/Subscription.model';
import dollar from '@/src/assets/images/png/$.png';
import getDaysDifference from '@/src/lib/dayDifference';
import CardOverview from './card-overview';

interface SubscriptionListProps {
  subscriptions: Subscription[];
}

const SubscriptionList: React.FC<SubscriptionListProps> = ({ subscriptions }) => {
  return (
    <>
      {subscriptions.map((subscription, index) => (
        <CardOverview
          key={index + "-" + subscription.service_name}
          due={getDaysDifference(new Date(), subscription.end_on!)}
          imgSrc={subscription.logo ? `${process.env.REACT_APP_S3_URL}/${subscription.logo}` : dollar}
          sizelogo={!subscription.logo ? 12 : undefined}
          subscriName={subscription.service_name!}
          price={subscription.amount!}
          dMy={subscription.cycle}
          typePlan={subscription.type}
          id={subscription.id}
        />
      ))}
    </>
  );
};

export default SubscriptionList;


//  {/* {subscriptions.map((subscription, index) => (
//                           <CardOverview
//                             key={index + "-" + subscription.service_name}
//                             due={getDaysDifference(new Date(), subscription.end_on!)}
//                             imgSrc={
//                               subscription.logo
//                                 ? `${process.env.REACT_APP_S3_URL}/${subscription.logo}`
//                                 : dollar
//                             }
//                             sizelogo={!subscription.logo ? 12 : undefined}
//                             subscriName={subscription.service_name!}
//                             price={subscription.amount!}
//                             dMy={subscription.cycle}
//                             typePlan={subscription.type}
//                             id={subscription.id}
//                           />
//                         ))} */}