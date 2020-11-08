import { combineReducers, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import newsSaga from './news/saga';
import news from './news';
import saved from './saved';
import menu from './currentMenu';

const rootReducer = combineReducers({
  news,
  saved,
  menu,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(newsSaga);

export default store;
