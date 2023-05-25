import axios from "axios";

const apiConfig = {
  baseURL: "https://e4ab-167-250-18-85.ngrok-free.app",
};

export const api = axios.create(apiConfig);
