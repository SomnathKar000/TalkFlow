import thunk from "redux-thunk";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { alertReducer, AlertState } from "./reducers/alertReducers";
import { userReducer, UserState } from "./reducers/userReducers";
import { themeReducer, ThemeState } from "./reducers/themeReducers";

export interface RootReducer {
  alert: AlertState;
  user: UserState;
  theme: ThemeState;
}

const rootReducer = combineReducers({
  alert: alertReducer,
  user: userReducer,
  theme: themeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const dispatch = store.dispatch;
