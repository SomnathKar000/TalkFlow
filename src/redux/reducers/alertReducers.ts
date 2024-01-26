import {
  AlertActionTypes,
  ALERT_CLOSE,
  ALERT_OPEN,
} from "../actions/alertActions";

export type AlerTtype = "error" | "info" | "success" | "warning";

export interface AlertState {
  open: boolean;
  type: AlerTtype;
  message: string;
}

const initialState: AlertState = {
  open: false,
  type: "info",
  message: "",
};

export const alertReducer = (
  state: AlertState = initialState,
  action: AlertActionTypes
): AlertState => {
  if (action.type === ALERT_OPEN) {
    return {
      open: true,
      type: action.payload.type,
      message: action.payload.message,
    };
  } else if (action.type === ALERT_CLOSE) {
    return { ...state, open: false };
  } else return state;
};
