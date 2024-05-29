import axiosAuth from "../../lib/axios";
import ResponseModel from "../../models/Response.model";
import User from "../../models/User.model";

export default async function userSignIn(user: User): Promise<ResponseModel<User>> {
    try {
        const response = await axiosAuth.post<ResponseModel<User>>(`/login`, user);

        return response.data
    } catch (error) {
        throw error;
    }
} 