import { legacy_createStore as createStore, combineReducers } from "redux";
import { alertReducer, AlertState } from "./reducers/alertReducers";
import { userReducer, UserState } from "./reducers/userReducers";

export interface RootReducer {
  alert: AlertState;
  user: UserState;
}

const rootReducer = combineReducers({
  alert: alertReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);
export const dispatch = store.dispatch;
