import { useAppSelector } from "@hooks/useAppSelector";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const apiConfig = {
  baseURL: "https://4ae7-167-250-18-85.ngrok-free.app",
};

const api = axios.create(apiConfig);

api.interceptors.request.use(
  function (config: InternalAxiosRequestConfig<any>) {
    const { token } = useAppSelector((state) => state.user);

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default api;
