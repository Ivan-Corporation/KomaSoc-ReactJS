import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "4ba4a295-a4e6-4c0d-a254-01bda40e5ba2"
    }
});


export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}

// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return axios.get(baseUrl + `follow?page=${currentPage}&count=${pageSize}`)
//         .then(response => {
//             return response.data
//         })
// }

