import { createAction, createReducer, ActionType } from 'typesafe-actions';

export const setCurrentMenu = createAction('menu/SET_CURRENT_MENU')<string>();

type MenuAction = ActionType<typeof setCurrentMenu>;

type MenuState = {
  menu: string;
};

const initialState = {
  menu: '',
};

const menu = createReducer<MenuState, MenuAction>(initialState).handleAction(
  setCurrentMenu,
  (state, action) => ({
    ...state,
    menu: action.payload,
  }),
);

export default menu;
