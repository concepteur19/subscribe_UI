import User from "./User.model"; 

export default interface ResponseModel<T> {
    code: number,
    status?: boolean,
    message?: string,
    T?: T
}