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
        return instance.post(`users?follow/${userId.id}`)
    },

    unfollow(userId) {
        return instance.delete(`users?follow/${userId.id}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)

    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}



