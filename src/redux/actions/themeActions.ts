import { Action } from "redux";

export const CHANGE_THEME = "CHANGE_THEME";

interface ChangeTheme extends Action<typeof CHANGE_THEME> {
  type: typeof CHANGE_THEME;
}
export type ThemeActionTypes = ChangeTheme;

export const changeTheme = (): ChangeTheme => ({ type: CHANGE_THEME });
