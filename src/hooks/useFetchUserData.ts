import { useCallback, useContext, useEffect, useState } from 'react';
import { SubscriptionContext } from '@/src/contexts/SubscriptionContext';
import Subscription from '@/src/models/Subscription.model';
import getDaysDifference from '@/src/lib/dayDifference';

const useFetchUserData = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useFetchUserData must be used within a SubscriptionProvider');
  }
  const { subscriptionResponse, setIsSubscriptionsModified } = context;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [payments$, setPayment] = useState<any[]>([]);
  const [notifPushs, setNotifPush] = useState<any[]>([]);
  const [amountSpent, setAmountSpent] = useState<string>();
  const [subscriptions, setUserSubscription] = useState<Subscription[]>([]);
  const [isDataReturn, setIsDataReturn] = useState<boolean>(false);
  const [filteredSubscriptions, setFilteredSubscriptions] = useState<Subscription[]>([]);
  const [upcomingSubscriptions, setUpcomingSubscriptions] = useState<Subscription[]>([]);
  
  const fetchUserData = useCallback(async () => {
    try {
      const response = subscriptionResponse;

      setIsDataReturn(response.subscriptions.length > 0);
      setUserSubscription(response.subscriptions);
      setFilteredSubscriptions(response.subscriptions);
      setPayment(response.payments);
      setAmountSpent(response.totalAmount);
      setNotifPush(response.notificationsToPush);
      setIsDialogOpen(response.notificationsToPush.length > 0);

      localStorage.setItem('payments', JSON.stringify(response.payments));
      const subscriptionToFilter = response.subscriptions
        .filter((subscription: Subscription) => {
          const daysDifference = getDaysDifference(new Date(), subscription.end_on!);
          return daysDifference <= 7 && daysDifference > 0;
        })
        .sort((a: Subscription, b: Subscription) => {
          const dayDiffA = getDaysDifference(new Date(), new Date(a.end_on!));
          const dayDiffB = getDaysDifference(new Date(), new Date(b.end_on!));
          return dayDiffA - dayDiffB;
        });

      setUpcomingSubscriptions(subscriptionToFilter);
    } catch (error) {
      console.error('Error refreshing data:', error);
    }
  }, [subscriptionResponse]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData, subscriptionResponse]);

  return {
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
  };
};

export default useFetchUserData;
