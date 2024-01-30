import {
  AlertActionTypes,
  ALERT_CLOSE,
  ALERT_OPEN,
} from "../actions/alertActions";

export type AlertType = "error" | "info" | "success" | "warning";

export interface AlertState {
  open: boolean;
  type: AlertType;
  message: string;
}

export const initialAlertState: AlertState = {
  open: false,
  type: "info",
  message: "",
};

export const alertReducer = (
  state = initialAlertState,
  action: AlertActionTypes
): AlertState => {
  if (action.type === ALERT_OPEN) {
    const newAlert: AlertState = {
      open: true,
      type: action.payload.type,
      message: action.payload.message,
    };
    return { ...state, ...newAlert };
  } else if (action.type === ALERT_CLOSE) {
    return { ...state, open: false };
  } else return state;
};
