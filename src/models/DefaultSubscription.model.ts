import PlanType from "./PlanType.model";

export default interface DefaultSubscription {
    id?: number,
    name: string,
    logo: string,
    planTypes?: PlanType[]
}