import React, { useCallback } from 'react';
import { debounce } from 'lodash';
import 'font-awesome/css/font-awesome.min.css';

import { useSelector } from 'react-redux';
import { Box, InputWrapper, SearchInput, SearchIcon } from './style';
import { useNewsFetch, useSetKeyword } from '../../hooks';
import { RootState } from '../../store';

export default function Header(): JSX.Element {
  const { fetchNewsDispatch } = useNewsFetch();
  const { setKeywordDispatch } = useSetKeyword();
  const news = useSelector((state: RootState) => state.news);

  const debouncedSearch = debounce((word) => {
    setKeywordDispatch(word);
    fetchNewsDispatch(word, 0);
  }, 1000);

  const handleKeywordChange = useCallback(
    (e) => {
      const { value } = e.target;
      if (news.keyword.trim() !== value.trim()) {
        debouncedSearch(value);
      }
    },
    [debouncedSearch, news.keyword],
  );

  return (
    <Box>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="Search news"
          onChange={handleKeywordChange}
        />
        <SearchIcon className="fa fa-search fa-lg" />
      </InputWrapper>
    </Box>
  );
}
