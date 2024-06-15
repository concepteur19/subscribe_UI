import axiosAuth from "../../lib/axios";
import ResponseModel from "../../models/Response.model";
import User from "../../models/User.model";

// async function userRegisteration(user: User): Promise<ResponseModel<User>> {
//     try {
//         const response = await axiosAuth.post<ResponseModel<User>>(`/register`, user);

//         return response.data
//     } catch (error) {
//         throw error;
//     }

// } 

const RegisterController = {
    userRegistration: async (user: User): Promise<ResponseModel<User>> => {
        try {
            const response = await axiosAuth.post<ResponseModel<User>>(`/register`, user);
            return response.data
        } catch (error) {
            throw error;
        }
    } ,

    googleRegistration: async (user: User): Promise<ResponseModel<User>> => {
        try {
            const response = await axiosAuth.post<ResponseModel<User>>(`/googleRegister`, user);
    
            return response.data
        } catch (error) {
            throw error;
        }
    } ,
}

export default RegisterController;