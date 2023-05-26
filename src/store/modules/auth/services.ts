import api from "@libs/axios";
import { UserDates } from "../user/types";
import { LoginPayload } from "./types";

export const postLogin = async (
  loginData: LoginPayload
): Promise<UserDates> => {
  return api.post("/sessions", loginData).then((response) => response.data);
};
