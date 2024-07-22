import axiosAuth from "@/src/lib/axios";
import ResponseModel from "@/src/models/Response.model";

const NotificationController = {
    // récupérer les notifications et les paiements
    getPaymentsAndNotifPush: async (user_id: number): Promise<ResponseModel<any>> => {
        try {
            const response = await axiosAuth.get<ResponseModel<any>>(`/user/notifications/${user_id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // modifier une notification
    updateNotification: async (status: string, notification_id: number): Promise<ResponseModel<Notification>> => {
        try {
            const response = await axiosAuth.put<ResponseModel<Notification>>(`/subscriptions/notificationUpdate/${notification_id}`, { status });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateNotifications: async (approuve: number[], reject: number[]): Promise<ResponseModel<Notification>> => {
        try {
            const response = await axiosAuth.post<ResponseModel<Notification>>(`/subscriptions/notifications/Update`, { idsApprouve: approuve, idsReject: reject });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

}

export default NotificationController;