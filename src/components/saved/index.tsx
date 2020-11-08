import React, { useCallback, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Card from '../card';
import { useScrollLocation } from '../../hooks';
import { NewsData } from '../../apis';
import { Layout, ContentList, ContentWrapper } from '../list/style';
import { RootState } from '../../store';
import { setCurrentMenu } from '../../store/currentMenu';

export default function SavedList(): JSX.Element {
  const { saved } = useSelector((state: RootState) => state.saved);
  const scrollLocation = useSelector(
    (state: RootState) => state.saved.scrollLocation,
  );
  const dispatch = useDispatch();
  const { savedScroll } = useScrollLocation();

  const handleScroll = () => {
    const { scrollTop } = document.documentElement;

    savedScroll(scrollTop);
  };

  const setMenu = useCallback(() => dispatch(setCurrentMenu('SAVED')), [
    dispatch,
  ]);

  useEffect(() => {
    window.scrollTo(0, scrollLocation);
    setMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <Layout>
      <ContentWrapper>
        <ContentList>
          {saved.length === 0 ? (
            <div>There is no saved news</div>
          ) : (
            saved.map((news: NewsData) => {
              return <Card key={news.web_url} news={news} />;
            })
          )}
        </ContentList>
      </ContentWrapper>
    </Layout>
  );
}
