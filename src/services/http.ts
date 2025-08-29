import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
// import { authStore } from "../src/store/auth"

async function defaultHeaders() {
    const defaultHeaders = {
        // 'token': await authStore().token,
        Accept: "application/json",
    };
    return defaultHeaders;

}



const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

apiClient.interceptors.request.use(async function (config: AxiosRequestConfig) {
    config.headers = await defaultHeaders();
    return config;
});


export { apiClient };