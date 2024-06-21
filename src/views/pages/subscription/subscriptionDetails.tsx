import React, { useEffect, useState } from "react";
import AddSubscriptionComponent, {
  DetailSubscription,
} from "@/src/views/components/basis/subscription_basis/addSubscriptionComponent";
// import Netflix from "../../../assets/images/png/netflix.png";
import { useNavigate, useParams } from "react-router-dom";
import SubscriptionController from "@/src/controllers/subscription/SubscriptionController";
import Subscription from "@/src/models/Subscription.model";
import { format } from "date-fns";
import dollar from "@/src/assets/images/png/$.png";
import getDaysDifference from "@/src/lib/dayDifference";

const SubscriptionDetails = () => {
  const { id } = useParams();

  const [subscription, setSubscription] = useState<Subscription | undefined>();
  const [detailSubscription, setDetail] = useState<DetailSubscription>({
    type: "",
    cycle: "",
    remind: "",
    payment: "",
    end_on: "",
    start_on: ""
  });

  const [responseMessage, setResponseMessage] = useState<string>();
  const navigate = useNavigate();
  const [endOn, setEndOn] = useState<Date>();
  const [due$, setDue] = useState<string>();

  useEffect(() => {
    const fetchDefaultSubDetail = async () => {
      try {
        const response = await SubscriptionController.getDetailSubscription(
          +id!
        );
        if (response.status && response.data) {
          setSubscription(response.data);
          setEndOn(response.data.end_on)
          // console.log("detail subscription", response.data);
        }
      } catch (error) {
        console.log("erreur requette détail souscription par défaut");
      }
    };

    fetchDefaultSubDetail();
  }, [id]);

  useEffect(() => {
    if (subscription) {
      const endOnDate = subscription.end_on
        ? format(new Date(subscription.end_on), "dd MMM yyyy")
        : "Date not available";

        const startOnDate = subscription.start_on
        ? format(new Date(subscription.start_on), "dd MMM yyyy")
        : "Date not available";
      setDetail({
        type: subscription.type!,
        cycle: subscription.cycle,
        payment: subscription.payment_method,
        remind: `${subscription.reminder} day${
          subscription.reminder > 1 ? "s" : ""
        } before`,
        end_on: endOnDate,
        start_on: startOnDate
      });
    }
  }, [subscription]);

  useEffect(() => {
    const today = new Date();
    const daydiff = endOn && getDaysDifference(today, endOn);
    setDue(daydiff?.toString())

    console.log("due date", daydiff)
  }, [endOn] )

  const deleteSubscription = async () => {
    try {
      const response = await SubscriptionController.deleteOneSubscription(+id!);
      setResponseMessage(response?.message!);
      
      setTimeout(() => {
        navigate('/home');
        setResponseMessage(undefined);
      }, 2000);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // // Vérifiez la validité de subscription.end_on avant d'utiliser format
  // const formattedEndDate = subscription?.end_on ? format(new Date(subscription.end_on), "dd MMM yyyy") : 'Date not available';

  // console.log("end on", formattedEndDate);

  return (
    <>
      {responseMessage !== undefined ? (
        <div className=" text-[#10B981] text-center py-2">{responseMessage}</div>
      ) : null}
      <AddSubscriptionComponent
        buttonText="Delete Subscription"
        btnBgColor=" bg-red "
        subscriptionLabel={subscription?.service_name!}
        amount={subscription?.amount!.toString()}
        dueDate={due$}
        cycle={subscription?.cycle}
        planDetail={subscription?.type}
        detailSubscription={detailSubscription}
        sizeLogo={!subscription?.logo ? 12 : undefined}
        logo={
          subscription?.logo
            ? "http://localhost:8000/storage/" + subscription.logo
            : dollar
        }
        deleteSubscription={deleteSubscription}
      />
    </>
  );
};

export default SubscriptionDetails;
