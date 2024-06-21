import React, { useEffect, useState } from "react";
import AddSubscriptionComponent from "../../components/basis/subscription_basis/addSubscriptionComponent";
// import Netflix from "../../../assets/images/png/netflix.png";
import { useParams } from "react-router-dom";
import SubscriptionController from "@/src/controllers/subscription/SubscriptionController";
import DefaultSubscription from "@/src/models/DefaultSubscription.model";

const AddSubscriptionParam = () => {
  const [defaultSubscription, setDefaultSub] = useState<DefaultSubscription>({
    id: 0,
    name: "",
    logo: "",
    planTypes: [],
  });

  const { id } = useParams();
  // console.log("juste avant le montage", id);

  useEffect(() => {
    const fetchDefaultSubDetail = async () => {
      try {
        const response = await SubscriptionController.getOneDefaultSubscription(
          +id!
        );
        if (response.status && response.data) {
          setDefaultSub(response.data);
          // console.log("detail default subscription", response.data);
          
        }
      } catch (error) {
        console.log("erreur requette détail souscription par défaut");
      }
    };

    fetchDefaultSubDetail();
  }, [id]);


  return (
    <AddSubscriptionComponent
      defaultSub_id={+id!}
      subscriptionLabel={defaultSubscription.name}
      logo={"http://localhost:8000/storage/"+defaultSubscription.logo}
      sizeLogo={34}
      buttonText="Add Subscription"
      btnBgColor=" bg-primary-0"

      planTypes={defaultSubscription.planTypes}
    />
  );
};

export default AddSubscriptionParam;
