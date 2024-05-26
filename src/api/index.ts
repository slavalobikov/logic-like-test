import axios, { AxiosRequestConfig, CreateAxiosDefaults } from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL as string;

const axiosConfig:AxiosRequestConfig = {
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
};

export const api = axios.create(axiosConfig as CreateAxiosDefaults);

api.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});
