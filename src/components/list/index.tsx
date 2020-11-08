import React, { useCallback, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Card from '../card';
import { useNewsFetch, useNextPage, useScrollLocation } from '../../hooks';
import { NewsData } from '../../apis';
import { Layout, ContentList, ContentWrapper } from './style';
import { RootState } from '../../store';
import { setCurrentMenu } from '../../store/currentMenu';

function List(): JSX.Element {
  const { newsState, fetchNewsDispatch } = useNewsFetch();
  const { page, nextPage } = useNextPage();
  const news = useSelector((state: RootState) => state.news);
  const { newsScroll } = useScrollLocation();
  const dispatch = useDispatch();

  const setMenu = useCallback(() => dispatch(setCurrentMenu('NEWS')), [
    dispatch,
  ]);

  useEffect(() => {
    window.scrollTo(0, news.scrollLocation);
    setMenu();
    if (news.news.length === 0) {
      fetchNewsDispatch(news.keyword, news.page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: migration into using IntersectionObserver with hook
  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    newsScroll(scrollTop);
    if (!news.loading && scrollTop + clientHeight === scrollHeight) {
      nextPage();
      fetchNewsDispatch(news.keyword, page + 1);
    }
  };

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
          {newsState.map((article: NewsData) => {
            // eslint-disable-next-line no-underscore-dangle
            return <Card key={article._id} news={article} />;
          })}
        </ContentList>
      </ContentWrapper>
    </Layout>
  );
}

export default React.memo(List);
