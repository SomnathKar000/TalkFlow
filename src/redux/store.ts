import thunk from "redux-thunk";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { alertReducer, AlertState } from "./reducers/alertReducers";
import { userReducer, UserState } from "./reducers/userReducers";
import { themeReducer, ThemeState } from "./reducers/themeReducers";
import { chatReducer, ChatState } from "./reducers/chatReducers";

export interface RootReducer {
  alert: AlertState;
  user: UserState;
  theme: ThemeState;
  chat: ChatState;
}

const rootReducer = combineReducers({
  alert: alertReducer,
  user: userReducer,
  theme: themeReducer,
  chat: chatReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const dispatch = store.dispatch;
export const getState = store.getState;
