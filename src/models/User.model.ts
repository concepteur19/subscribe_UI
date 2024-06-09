export default interface User {
    id?: number,
    username?: string,
    email?: string,
    password?: string,
    photo?: string,
    phone_number?: string,
    isVerified?: boolean,
    token?: string
}