import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import { RootState } from '../store';
import { increasePage } from '../store/news';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useNextPage() {
  const page = useSelector((state: RootState) => state.news.page);
  const dispatch = useDispatch();
  const nextPage = useCallback(() => dispatch(increasePage()), [dispatch]);
  return {
    page,
    nextPage,
  };
}
