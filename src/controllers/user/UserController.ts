import axiosAuth from "@/src/lib/axios";
import ResponseModel from "@/src/models/Response.model";
import User from "@/src/models/User.model";

const UserController = {

    // modifier une souscription
    updateUser: async (user: User): Promise<ResponseModel<User>> => {
        try {
            const response = await axiosAuth.post<ResponseModel<User>>(`/users/edit/${user.id}`, user);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
     
}

export default UserController;