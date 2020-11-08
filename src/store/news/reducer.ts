import { createReducer } from 'typesafe-actions';

import {
  fetchNewsAction,
  increasePage,
  setKeyword,
  setScrollLocation,
} from './actions';
import { NewsAction, NewsState } from './types';

const initialState: NewsState = {
  news: [],
  message: '',
  page: 0,
  keyword: '',
  loading: false,
  scrollLocation: 0,
};

const newsReducer = createReducer<NewsState, NewsAction>(initialState)
  .handleAction(fetchNewsAction.success, (state, action) => {
    return {
      ...state,
      news: [...state.news, ...action.payload.news],
      loading: false,
    };
  })
  .handleAction(fetchNewsAction.failure, (state, action) => {
    return { ...state, message: action.payload.message, loading: false };
  })
  .handleAction(fetchNewsAction.request, (state) => {
    return { ...state, loading: true };
  })
  .handleAction(increasePage, (state) => {
    return { ...state, page: state.page < 100 ? state.page + 1 : state.page };
  })
  .handleAction(setKeyword, (state, action) => {
    return { ...state, keyword: action.payload, news: [], page: 0 };
  })
  .handleAction(setScrollLocation, (state, action) => {
    return { ...state, scrollLocation: action.payload };
  });

export default newsReducer;
