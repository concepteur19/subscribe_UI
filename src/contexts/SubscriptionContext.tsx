// src/context/SubscriptionContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";
// import ResponseModel from '../models/Response.model';
import SubscriptionController from "../controllers/subscription/SubscriptionController";
import SubscriptionResponse from "../models/SubscriptionResponse";

// Define the context value types
interface SubscriptionContextType {
  subscriptionResponse: SubscriptionResponse;
  setSubscriptionResponse: React.Dispatch<React.SetStateAction<SubscriptionResponse>>;
  setIsSubscriptionsModified: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with an initial value of undefined
export const SubscriptionContext = createContext<
  SubscriptionContextType | undefined
>(undefined);

interface SubscriptionProviderProps {
  children: ReactNode;
  userId: number; // Pass the userId as a prop
}

export const SubscriptionProvider: React.FC<SubscriptionProviderProps> = ({
  children,
  userId,
}) => {
  // State to hold the subscription data
  const [subscriptionResponse, setSubscriptionResponse] =
    useState<SubscriptionResponse >({
      subscriptions: [],
      payments: [],
      notificationsToPush: [],
      totalAmount: "0.00"
    });
  // Flag to indicate if subscriptions have been modified and need to be fetched again
  const [isSubscriptionsModified, setIsSubscriptionsModified] =
    useState<boolean>(true);

  // Fetch subscriptions from the API when `isSubscriptionsModified` is true
  useEffect(() => {
    if (isSubscriptionsModified) {
      SubscriptionController.getUserSubscriptions(userId)
        .then((response) => {
          console.log("contexte", response);
          
          setSubscriptionResponse(response.data!);
          // Reset the flag after fetching data
          setIsSubscriptionsModified(false);
        })
        .catch((error) => {
          console.error("Error fetching subscriptions", error);
        });
    }
  }, [isSubscriptionsModified, userId]);

  return (
    <SubscriptionContext.Provider
      value={{
        subscriptionResponse,
        setSubscriptionResponse,
        setIsSubscriptionsModified,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};
