import { CHANGE_THEME, ThemeActionTypes } from "../actions/themeActions";

type Mode = "dark" | "light";
export interface ThemeState {
  mode: Mode;
}

const inisialState: ThemeState = {
  mode: "dark",
};

export const themeReducer = (
  state = inisialState,
  action: ThemeActionTypes
): ThemeState => {
  if (action.type === CHANGE_THEME) {
    let mode: Mode = "dark";
    if (state.mode === "dark") mode = "light";
    return { ...state, mode };
  } else return state;
};
