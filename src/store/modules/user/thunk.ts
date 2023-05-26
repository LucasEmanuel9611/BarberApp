import { AppThunk } from "src/store";
import { ThunkOptions } from "../../types";
import { loginThunk } from "../auth/thunk";
import { CreateUserPayload } from "../user/types";
import { postCreateUser } from "./services";

export const createUserAndLoginThunk =
  (
    data: CreateUserPayload,
    { onSuccess, onError }: ThunkOptions<void, any>
  ): AppThunk =>
  async (dispatch) => {
    try {
      await postCreateUser(data);
      dispatch(loginThunk(data, {}));
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  };
