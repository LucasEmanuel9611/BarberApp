import { store } from "@store/index";
import { authActions } from "@store/modules/auth/slice";
import { userActions } from "@store/modules/user/slice";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const apiConfig = {
  baseURL: "https://4ae7-167-250-18-85.ngrok-free.app",
};

const api = axios.create(apiConfig);

api.interceptors.request.use(
  function (config: InternalAxiosRequestConfig<any>) {
    const token = store.getState().user.token;

    if (token !== "") {
      console.log("token", token);
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError<any>) {
    if (error.response?.status === 401) {
      store.dispatch(userActions.clearUserData());
      store.dispatch(authActions.clearAuthData());
    }
    return Promise.reject(error);
  }
);

export default api;
