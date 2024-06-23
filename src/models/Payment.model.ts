export default interface Payment {
    id: number;
    notification_status: string;
    notif_date: Date | string;
    amount: number;
    end_on: Date | string;
    reminder: number;
    logo: string;
    service_name: string
}