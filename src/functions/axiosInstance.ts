import axios from "axios";
import { getCookie } from 'cookies-next';

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: process.env.URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getCookie('token')}`
    },
})