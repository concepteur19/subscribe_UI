import axiosAuth from "@/src/lib/axios";
import ResponseModel from "@/src/models/Response.model";

const NotificationController = {

    // modifier une souscription
    updateNotification: async (subscription_id: number, user_id: number): Promise<ResponseModel<Notification>> => {
        try {
            const response = await axiosAuth.put<ResponseModel<Notification>>(`/subscriptions/notificationUpdate/${user_id}`, subscription_id);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
     
}

export default NotificationController;