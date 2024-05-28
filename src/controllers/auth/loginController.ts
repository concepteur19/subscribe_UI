import axiosAuth from "@/src/lib/axios";
import ResponseModel from "@/src/models/Response.model";
import User from "@/src/models/User.model";

export default async function userSignIn(user: User): Promise<ResponseModel<User>> {
    try {
        const response = await axiosAuth.post<ResponseModel<User>>(`/login`, user);

        return response.data
    } catch (error) {
        throw error;
    }
} 