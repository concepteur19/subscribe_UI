import React, { useContext, useEffect, useState } from "react";
import AddSubscriptionComponent from "../../components/basis/subscription_basis/addSubscriptionComponent";
import { useNavigate, useParams } from "react-router-dom";
// import SubscriptionController from "@/src/controllers/subscription/SubscriptionController";
// import DefaultSubscription from "@/src/models/DefaultSubscription.model";
import Subscription from "@/src/models/Subscription.model";
import dollar from "@/src/assets/images/png/$.png";
import SubscriptionController from "@/src/controllers/subscription/SubscriptionController";
import DefaultSubscription from "@/src/models/DefaultSubscription.model";
import { SubscriptionContext } from "@/src/contexts/SubscriptionContext";

const SubscriptionUpdate = () => {
  const [detailSubscription, setDetailSub] = useState<Subscription | undefined>(
    undefined
  );
  const [defaultSubscription, setDefaultSub] = useState<DefaultSubscription>({
    id: 0,
    name: "",
    logo: "",
    planTypes: [],
  });

  const [message, setMessage] = useState<string>();
  const navigate = useNavigate();

  const context = useContext(SubscriptionContext);

  // Ensure the context is not undefined
  if (!context) {
    throw new Error(
      "ModifySubscription must be used within a SubscriptionProvider"
    );
  }

  const { setIsSubscriptionsModified } = context;

  // const { id } = useParams();
  // console.log("juste avant le montage", id);

  useEffect(() => {
    const subDetail: Subscription = JSON.parse(
      localStorage.getItem("subscriptionDetail")!
    );
    // console.log("####################",subDetail);

    if (subDetail) {
      setDetailSub(subDetail);
      const fetchDefaultSubDetail = async () => {
        try {
          const response =
            await SubscriptionController.getOneDefaultSubscription(
              subDetail.defaultSub_id!
            );
          if (response.status && response.data) {
            setDefaultSub(response.data);
            // console.log("detail default subscription", response.data);
          }
        } catch (error) {
          // console.log("erreur requette détail souscription par défaut", error);
        }
      };

      fetchDefaultSubDetail();
    }
  }, []);

  const updateSubscription = async (subscriptionToUpdate: any) => {
    try {
      // console.log("***************************", subscriptionToUpdate);
      const response = await SubscriptionController.updateSubscription(
        detailSubscription?.id!,
        subscriptionToUpdate
      );
      if (response.status) {
        setMessage(response.message);
        setTimeout(() => {
          setMessage(undefined);
          setIsSubscriptionsModified(true);
          navigate("/home");
        }, 1500);
        // console.log("detail default subscription", response.message);
      }
    } catch (error) {
      // console.log("erreur requette détail souscription par défaut", error);
    }
  };

  return (
    <>
      {message && (
        <div className=" text-[#10B981] text-center py-2"> {message} </div>
      )}

      <AddSubscriptionComponent
        defaultSub_id={detailSubscription?.defaultSub_id}
        subscriptionLabel={detailSubscription?.service_name}
        logo={
          detailSubscription?.logo
            ? `${process.env.REACT_APP_API_URL}/storage/${detailSubscription.logo}`
            : dollar
        }
        sizeLogo={!detailSubscription?.logo ? 12 : undefined}
        buttonText="Save update"
        btnBgColor=" bg-primary-0"
        planTypes={defaultSubscription.planTypes}
        updateSubscription={updateSubscription}
      />
    </>
  );
};

export default SubscriptionUpdate;
