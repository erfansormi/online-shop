import axios from "axios";

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: process.env.URL,
    headers: {
        "Content-Type": "application/json",
    },
})