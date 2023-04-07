import axios from "axios";

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: process.env.DEV_URL,
    headers: {
        "Content-Type": "application/json",
    },
})