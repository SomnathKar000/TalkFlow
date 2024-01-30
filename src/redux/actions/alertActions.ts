import { Action } from "redux";
import { AlertType } from "../reducers/alertReducers";

export const ALERT_OPEN = "ALERT_OPEN";
export const ALERT_CLOSE = "ALERT_CLOSE";

interface OpenAlertAction extends Action<typeof ALERT_OPEN> {
  type: typeof ALERT_OPEN;
  payload: {
    type: AlertType;
    message: string;
  };
}
interface CloseAlertAction extends Action<typeof ALERT_CLOSE> {
  type: typeof ALERT_CLOSE;
}

export type AlertActionTypes = OpenAlertAction | CloseAlertAction;

export const openAlert = (
  type: AlertType,
  message: string
): OpenAlertAction => {
  return {
    type: ALERT_OPEN,
    payload: {
      type,
      message,
    },
  };
};
export const closeAlert = (): CloseAlertAction => ({ type: ALERT_CLOSE });
