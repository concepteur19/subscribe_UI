import SubscriptionResponse from "@/src/models/SubscriptionResponse";
import axiosAuth from "../../lib/axios";
import DefaultSubscription from "../../models/DefaultSubscription.model";
import ResponseModel from "../../models/Response.model";
import Subscription from "../../models/Subscription.model";

const SubscriptionController = {
    //  ajouter unz souscription
    addSubscription: async (subscription: Subscription): Promise<ResponseModel<undefined>> => {
        try {
            const response = await axiosAuth.post<ResponseModel<undefined>>('/subscriptions/add', subscription);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // détail d'une souscription
    getDetailSubscription: async (subscription_id: number): Promise<ResponseModel<Subscription>> => {
        try {
            const response = await axiosAuth.get<ResponseModel<Subscription>>(`/subscriptions/subscription/${subscription_id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getDefaultSubscription: async (): Promise<ResponseModel<DefaultSubscription[]>> => {
        try {
            const response = await axiosAuth.post<ResponseModel<DefaultSubscription[]>>('/subscriptions/defaultSubscriptions');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getOneDefaultSubscription: async (defaulSub_id: number): Promise<ResponseModel<DefaultSubscription>> => {
        try {
            const response = await axiosAuth.get<ResponseModel<DefaultSubscription>>(`/subscriptions/defaultSubscriptions/${defaulSub_id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // toute les souscriptions  d'un utilisateur
    getUserSubscriptions: async (user_id: number): Promise<ResponseModel<SubscriptionResponse>> => {//Subscription[]>> => {
        try {
            const response = await axiosAuth.get<ResponseModel<SubscriptionResponse>>(`/subscriptions/${user_id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // les souscriptions expirés d'un utilisateur
    getExpSubscriptions: async (user_id: number): Promise<ResponseModel<Subscription[]>> => {
        try {
            const response = await axiosAuth.get<ResponseModel<Subscription[]>>(`/subscriptions/expired/${user_id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // modifier une souscription
    updateSubscription: async (subscription_id: number, subscriptionUpdate: any): Promise<ResponseModel<undefined>> => {
        try {
            const response = await axiosAuth.put<ResponseModel<undefined>>(`/subscriptions/edit/${subscription_id}`, subscriptionUpdate);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    
    // supprimer une souscription
    deleteOneSubscription: async (subscription_id: number): Promise<ResponseModel<undefined>> => {
        try {
            const response = await axiosAuth.delete<ResponseModel<undefined>>(`/subscriptions/delete/${subscription_id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    } 
}

export default SubscriptionController;