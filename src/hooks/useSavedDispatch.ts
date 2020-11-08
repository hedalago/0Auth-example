import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { NewsData } from '../apis';
import { addSavedNews, removeSavedNews } from '../store/saved';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useSavedDispatch(id: string, news: NewsData) {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(addSavedNews(news)), [
    dispatch,
    news,
  ]);
  const onRemove = useCallback(() => dispatch(removeSavedNews(id)), [
    dispatch,
    id,
  ]);

  return { onToggle, onRemove };
}
