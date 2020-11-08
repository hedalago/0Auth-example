import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import { RootState } from '../store';
import { setKeyword } from '../store/news';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useAddTodo() {
  const stateKeyword = useSelector((state: RootState) => state.news.keyword);
  const dispatch = useDispatch();
  const setKeywordDispatch = useCallback((text) => dispatch(setKeyword(text)), [
    dispatch,
  ]);

  return { stateKeyword, setKeywordDispatch };
}
