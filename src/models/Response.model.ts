export default interface ResponseModel<T> {
    code: number,
    status?: boolean,
    message?: string,
    data?: T
}