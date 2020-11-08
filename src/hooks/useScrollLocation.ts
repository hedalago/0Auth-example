import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setScrollLocation as setNewsScrollLocation } from '../store/news';
import { setScrollLocation } from '../store/saved';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useScrollLocation() {
  const dispatch = useDispatch();
  const newsScroll = useCallback(
    (location) => dispatch(setNewsScrollLocation(location)),
    [dispatch],
  );
  const savedScroll = useCallback(
    (location) => dispatch(setScrollLocation(location)),
    [dispatch],
  );

  return {
    newsScroll,
    savedScroll,
  };
}

export default useScrollLocation;
