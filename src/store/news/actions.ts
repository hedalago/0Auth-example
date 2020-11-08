import { createAction, createAsyncAction } from 'typesafe-actions';

import { NewsData } from '../../apis';

export interface Request {
  keyword: string;
  page: number;
}

interface Response {
  news: NewsData[];
}

interface Error {
  message: string;
}

export const FETCH_NEWS_REQUEST = 'news/FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'news/FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'news/FETCH_NEWS_FAILURE';
export const INCREASE_PAGE = 'news/INCREASE_PAGE';
export const SET_KEYWORD = 'news/SET_KEYWORD';
export const SET_SCROLL_LOCATION = 'news/SET_SCROLL_LOCATION';

export const fetchNewsAction = createAsyncAction(
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
)<Request, Response, Error>();

export const increasePage = createAction(INCREASE_PAGE)();
export const setKeyword = createAction(SET_KEYWORD)<string>();
export const setScrollLocation = createAction(SET_SCROLL_LOCATION)<number>();
