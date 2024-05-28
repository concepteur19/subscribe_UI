import axiosAuth from "@/src/lib/axios";
import ResponseModel from "@/src/models/Response.model";
import User from "@/src/models/User.model";

// const RegisterController = {

// }

export default async function userRegisteration(user: User): Promise<any> {
    try {
        const response = await axiosAuth.post<ResponseModel<User>>(`/register`, user);

        return response.data
    } catch (error) {
        throw error;
    }
} 