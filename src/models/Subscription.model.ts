export default interface Subscription {
    user_id: number,
    defaultSub_id?: number,
    service_name?: string,
    logo?: string,
    amount?: number,
    start_on: Date,
    end_on?: Date,
    payment_method: string,
    cycle: string,
    plan_type: string,
    reminder: number,
}