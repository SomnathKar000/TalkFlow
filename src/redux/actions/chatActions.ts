import { Action } from "redux";
import axios from "axios";
import { dispatch } from "../store";
import { openAlert } from "./alertActions";
import { getSingleOrMultipleMessagesAPI } from "../../helpers/services/messageApis";

export const SET_CONVERSATION = "SET_CONVERSATION";
export const GET_ALL_CONVERSATIONS = "GET_ALL_CONVERSATIONS";

export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

interface GetALlConversations extends Action<typeof GET_ALL_CONVERSATIONS> {
  type: typeof GET_ALL_CONVERSATIONS;
}

interface StartLoading extends Action<typeof START_LOADING> {
  type: typeof START_LOADING;
}

interface EndLoading extends Action<typeof END_LOADING> {
  type: typeof END_LOADING;
}

export type ChatActionTypes = GetALlConversations | StartLoading | EndLoading;

export const startLoading = (): StartLoading => {
  return {
    type: START_LOADING,
  };
};
export const endLoading = (): EndLoading => {
  return {
    type: END_LOADING,
  };
};

export const getAllConversations = async () => {
  dispatch(startLoading());
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch(openAlert("error", "Token doesn't exist"));
    dispatch(endLoading());
    return;
  }
  try {
    const response = await axios.get(getSingleOrMultipleMessagesAPI, {
      headers: {
        "auth-token": token,
      },
    });
    console.log(response.data);
  } catch (error) {
    dispatch(endLoading());
  }
};
