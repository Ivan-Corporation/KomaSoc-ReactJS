import axios from "axios";
import { follow } from "../redux/users-reducer";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "4ba4a295-a4e6-4c0d-a254-01bda40e5ba2"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});


export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });

    },
    follow(userId) {
        return instance.post(`follow/${userId.id}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId.id}`)
    },
    getProfile(userId) {
        console.warn('ProfileAPI object')
        return ProfileAPI.getProfile(userId)
    }
}



export const ProfileAPI = {
   
    getProfile(userId) {
        return instance.get(`profile/` + userId)

    },
    getStatus(userId) {
        return instance.get(`profile/status/`+userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        });
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}



