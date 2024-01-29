import axios from "axios";
import { Action } from "redux";
import {
  getOrPostUserApi,
  //   loginUserApi,
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

export type UserActionTypes = StartLoading | EndLoading | SetUpUser;

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
    localStorage.setItem("token", token);
    dispatch({
      type: SET_USER,
      payload: {
        user: {
          email,
          name,
        },
      },
    });
    dispatch(endLoading());
  } catch (error) {
    dispatch(endLoading());
    const errorMessage = error.response.data.message || "Something went wrong";
    dispatch(openAlert("error", errorMessage));
  }
};
