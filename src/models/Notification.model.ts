export default interface Notification {
    user_id: number,
    subscription_id: number,
    notification_channel: string,
    sent_at: Date,
    notification_status: string,
    notification_content?: string,
}