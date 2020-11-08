import { createAction } from 'typesafe-actions';

import { NewsData } from '../../apis';

export const ADD_SAVED_NEWS = 'saved/ADD_SAVED_NEWS';
export const REMOVE_SAVED_NEWS = 'saved/REMOVE_SAVED_NEWS';
export const SET_SCROLL_LOCATION = 'saved/SET_SCROLL_LOCATION';

export const addSavedNews = createAction(ADD_SAVED_NEWS)<NewsData>();
export const removeSavedNews = createAction(REMOVE_SAVED_NEWS)<string>();
export const setScrollLocation = createAction(SET_SCROLL_LOCATION)<number>();
