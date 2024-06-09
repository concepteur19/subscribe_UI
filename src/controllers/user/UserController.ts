import axiosAuth from "@/src/lib/axios";
import ResponseModel from "@/src/models/Response.model";
import User from "@/src/models/User.model";

const UserController = {
    // Update user method accepting FormData
    updateUser: async (formData: FormData): Promise<ResponseModel<User>> => {
        try {
            const response = await axiosAuth.post<ResponseModel<User>>(`/users/edit/${formData.get("id")}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // connected user
    retrieveConnectedUser: async (): Promise<User> => {
        try {
            const response = await axiosAuth.get<User>(`/user`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default UserController;