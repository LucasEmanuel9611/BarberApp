import api from "@libs/axios";
import { CreateUserPayload } from "../user/types";

export const postCreateUser = async (userData: CreateUserPayload) =>
  api.post("/users", userData);
