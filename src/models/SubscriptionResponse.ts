import Payment from "./Payment.model";
import Subscription from "./Subscription.model";

export default interface SubscriptionResponse {
    subscriptions: Subscription[];
    payments: Payment[];
    notificationsToPush: Payment[];
    totalAmount: string
}