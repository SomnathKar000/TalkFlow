import { legacy_createStore as createStore, combineReducers } from "redux";
import { alertReducer, AlertState } from "./reducers/alertReducers";

export interface RootReducer {
  alert: AlertState;
}

const rootReducer = combineReducers({
  alert: alertReducer,
});

export const store = createStore(rootReducer);
export const dispatch = store.dispatch;
