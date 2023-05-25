import axios from "axios";

export const handleErrorResponse = (error: any, onError?: any) => {
  if (axios.isAxiosError(error) && error.response?.status === 401) {
    return;
  } else {
    return onError;
  }
};
