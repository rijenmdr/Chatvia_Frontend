
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { errorResponse } from "./errorResponse";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    console.info(`[request] [${JSON.stringify(config)}]`);
    return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    console.info(`[response] [${JSON.stringify(response)}]`);
    return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    // console.error(`[response error] [${JSON.stringify(error)}]`);
    errorResponse(error)
    return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
    if (typeof window !== 'undefined') {
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token'); 
    }
    console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}
