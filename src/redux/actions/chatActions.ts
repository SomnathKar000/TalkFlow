import { Action } from "redux";
import axios from "axios";
import { dispatch, getState } from "../store";
import { UserState } from "../reducers/userReducers";
import { openAlert } from "./alertActions";
import { getSingleOrMultipleMessagesAPI } from "../../helpers/services/messageApis";

export const SET_CONVERSATION = "SET_CONVERSATION";
export const GET_ALL_CONVERSATIONS = "GET_ALL_CONVERSATIONS";
export const SELECT_CONVERSATION = "SELECT_CONVERSATION";
export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

interface GetALlConversations extends Action<typeof GET_ALL_CONVERSATIONS> {
  type: typeof GET_ALL_CONVERSATIONS;
  payload: {
    conversations: unknown[];
    userState: UserState;
  };
}

interface StartLoading extends Action<typeof START_LOADING> {
  type: typeof START_LOADING;
}

interface EndLoading extends Action<typeof END_LOADING> {
  type: typeof END_LOADING;
}

interface SelectConversation extends Action<typeof SELECT_CONVERSATION> {
  type: typeof SELECT_CONVERSATION;
  payload: {
    conversationId: string;
  };
}

export type ChatActionTypes = GetALlConversations | StartLoading | EndLoading|SelectConversation;

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

export const selectConversation = (
  conversationId: string
)=>{
  return {
    type: SELECT_CONVERSATION,
    payload: {
      conversationId
    }
  }
}

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

    console.log(response.data.messages);
    dispatch({
      type: GET_ALL_CONVERSATIONS,
      payload: {
        conversations: response.data.messages,
        userState: getState().user,
      },
    });
  } catch (error) {
    dispatch(endLoading());
  }
};
