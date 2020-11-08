import { useSelector, useDispatch } from 'react-redux';

import { fetchNewsAction } from '../store/news';
import { RootState } from '../store';
import { NewsData } from '../apis';

interface UseNewsFetchType {
  newsState: NewsData[];
  fetchNewsDispatch: (keyword: string, page: number) => void;
}

function useNewsFetch(): UseNewsFetchType {
  const dispatch = useDispatch();
  const newsState = useSelector((store: RootState) => store.news).news;

  const fetchNewsDispatch = (keyword: string, page: number): void => {
    dispatch(fetchNewsAction.request({ keyword, page }));
  };

  return {
    newsState,
    fetchNewsDispatch,
  };
}

export default useNewsFetch;
