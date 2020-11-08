import { takeEvery, call, put } from 'redux-saga/effects';

import { fetchNewsData } from '../../apis';
import {
  Request,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from './actions';

interface WorkerActionType {
  type: string;
  payload: Request;
}

function* fetchWorker(action: WorkerActionType) {
  try {
    const fetched = yield call(
      fetchNewsData,
      action.payload.keyword,
      action.payload.page,
    );
    yield put({
      type: FETCH_NEWS_SUCCESS,
      payload: { news: fetched },
    });
  } catch (e) {
    yield put({
      type: FETCH_NEWS_FAILURE,
      payload: { message: e.message },
    });
  }
}

export default function* newsSaga(): Generator {
  yield takeEvery(FETCH_NEWS_REQUEST, fetchWorker);
}
