import {
  START_LOADING,
  END_LOADING,
// LOG_OUT,
  SET_USER,
  UserActionTypes,
} from "../actions/userActions";

export interface User {
  name: string;
  email: string;
}
export interface UserState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: null,
  loading: false,
  isAuthenticated: false,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActionTypes
) => {
  if (action.type === START_LOADING) {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === END_LOADING) {
    return {
      ...state,
      loading: false,
    };
  } else if (action.type === SET_USER) {
    return {
      ...state,
      user: action.payload.user,
    };
  } else return state;
};
