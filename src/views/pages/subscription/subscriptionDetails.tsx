import React, { useEffect, useState } from "react";
import AddSubscriptionComponent, {
  DetailSubscription,
} from "@/src/views/components/basis/subscription_basis/addSubscriptionComponent";
// import Netflix from "../../../assets/images/png/netflix.png";
import { useParams } from "react-router-dom";
import SubscriptionController from "@/src/controllers/subscription/SubscriptionController";
import Subscription from "@/src/models/Subscription.model";
import { format } from "date-fns";

const SubscriptionDetails = () => {
  const { id } = useParams();

  const [subscription, setSubscription] = useState<Subscription | undefined>();
  const [detailSubscription, setDetail] = useState<DetailSubscription>({
    type: "",
    cycle: "",
    remind: "",
    payment: "",
    end_on: "",
  });

  console.log("juste avant le montage", id);

  useEffect(() => {
    const fetchDefaultSubDetail = async () => {
      try {
        const response = await SubscriptionController.getDetailSubscription(
          +id!
        );
        if (response.status && response.data) {
          setSubscription(response.data);
          console.log("detail subscription", response.data);
        }
      } catch (error) {
        console.log("erreur requette détail souscription par défaut");
      }
    };

    fetchDefaultSubDetail();
  }, [id]);

  useEffect(() => {
    if (subscription) {
      const endOnDate = subscription.end_on ? format(new Date(subscription.end_on), "dd MMM yyyy") : 'Date not available';
      setDetail({
        type: subscription.type!,
        cycle: subscription.cycle,
        payment: subscription.payment_method,
        remind: `${subscription.reminder} day${subscription.reminder > 1 ? "s" : ""} before`,
        end_on: endOnDate,
      });
    }
  }, [subscription]);

  // // Vérifiez la validité de subscription.end_on avant d'utiliser format
  // const formattedEndDate = subscription?.end_on ? format(new Date(subscription.end_on), "dd MMM yyyy") : 'Date not available';

  // console.log("end on", formattedEndDate);

  return (
    <AddSubscriptionComponent
      buttonText=" Delete Subscription"
      btnBgColor=" bg-red "
      subscriptionLabel={subscription?.service_name!}
      amount={subscription?.amount!.toString()}
      dueDate="5"
      cycle={subscription?.cycle}
      planDetail={subscription?.type}
      detailSubscription={detailSubscription}
      logo={"http://localhost:8000/storage/" + subscription?.logo}
    />
  );
};

export default SubscriptionDetails;
