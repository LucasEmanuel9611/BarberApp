import { AppThunk } from "src/store";
import { ThunkOptions } from "../../types";
import { userActions } from "../user/slice";
import { UserDates } from "../user/types";
import { postLogin } from "./services";
import { authActions } from "./slice";
import { LoginPayload } from "./types";

export const loginThunk =
  (
    user: LoginPayload,
    { onSuccess, onError }: ThunkOptions<UserDates, any>
  ): AppThunk =>
  async (dispatch) => {
    try {
      const data = await postLogin(user);
      dispatch(authActions._onLoginSuccess());
      dispatch(userActions._saveUser(data));
      onSuccess && onSuccess(data);
    } catch (error) {
      onError && onError(error);
    }
  };
