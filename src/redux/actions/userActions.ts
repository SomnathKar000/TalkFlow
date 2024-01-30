import axios from "axios";
import { Action } from "redux";
import {
  getOrPostUserApi,
  loginUserApi,
} from "../../helpers/services/userApis";
import { User } from "../reducers/userReducers";
import { openAlert } from "./alertActions";
import { dispatch } from "../store";

export const LOG_OUT = "LOG_OUT";
export const SET_USER = "SET_USER";
export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

interface StartLoading extends Action<typeof START_LOADING> {
  type: typeof START_LOADING;
}

interface EndLoading extends Action<typeof END_LOADING> {
  type: typeof END_LOADING;
}
interface SetUpUser extends Action<typeof SET_USER> {
  type: typeof SET_USER;
  payload: {
    user: User;
  };
}

interface LogOutUser extends Action<typeof LOG_OUT> {
  type: typeof LOG_OUT;
}

export type UserActionTypes =
  | StartLoading
  | EndLoading
  | SetUpUser
  | LogOutUser;

const startLoading = (): StartLoading => {
  return {
    type: START_LOADING,
  };
};
const endLoading = (): EndLoading => {
  return {
    type: END_LOADING,
  };
};

export const signUp = async (name: string, email: string, password: string) => {
  dispatch(startLoading());
  try {
    const response = await axios.post(getOrPostUserApi, {
      name,
      email,
      password,
    });
    const token = response.data.token;
    const user = response.data.user;
    localStorage.setItem("token", token);
    dispatch({
      type: SET_USER,
      payload: {
        user: user,
      },
    });
    dispatch(endLoading());
  } catch (error) {
    console.log(error);
    dispatch(endLoading());
    const errorMessage = error.response.data.message || "Something went wrong";
    dispatch(openAlert("error", errorMessage));
  }
};

export const loginUser = async (email: string, password: string) => {
  dispatch(startLoading());
  try {
    dispatch(startLoading());
    const response = await axios.post(loginUserApi, { email, password });
    const token = response.data.token;
    const user = response.data.user;
    localStorage.setItem("token", token);
    dispatch({
      type: SET_USER,
      payload: {
        user,
      },
    });
    dispatch(endLoading());
  } catch (error) {
    console.log(error);
    dispatch(endLoading());
    const errorMessage = error.response.data.message || "Something went wrong";
    dispatch(openAlert("error", errorMessage));
  }
};

export const getUserData = async () => {
  const token = localStorage.getItem("token");
  dispatch(startLoading());
  if (token === undefined) {
    dispatch(openAlert("error", "Token doesn't exist"));
    dispatch(endLoading());
    return;
  }
  try {
    const response = await axios.get(getOrPostUserApi, {
      headers: {
        "auth-token": token,
      },
    });
    const user = response.data.user;
    dispatch({
      type: SET_USER,
      payload: {
        user,
      },
    });
    dispatch(endLoading());
  } catch (error) {
    console.log(error);
    dispatch(endLoading());
    localStorage.removeItem("token");
    const errorMessage = error.response.data.message || "Something went wrong";
    dispatch(openAlert("error", errorMessage));
  }
};

export const logOut = () => {
  localStorage.removeItem("token");
  return { type: LOG_OUT };
};
