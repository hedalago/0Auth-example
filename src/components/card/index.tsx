/* eslint-disable no-underscore-dangle */
import React, { SyntheticEvent, useCallback } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import { useSelector } from 'react-redux';
import {
  CardWrapper,
  Background,
  TextWrapper,
  Title,
  Description,
  MetaInfo,
  StarIcon,
} from './style';
import { NewsData } from '../../apis';
import * as utils from '../../utils';
import { useSavedDispatch } from '../../hooks';
import { RootState } from '../../store';

type CardProp = {
  news: NewsData;
};

export default function Card({ news }: CardProp): JSX.Element {
  const { onToggle, onRemove } = useSavedDispatch(news._id, news);
  const { saved } = useSelector((state: RootState) => state.saved);

  const cardClickHandler = () => {
    window.open(news.web_url);
  };

  const startClickHandler = useCallback(
    (e: SyntheticEvent<Element>) => {
      e.stopPropagation();
      if (saved.filter((item: NewsData) => item._id === news._id).length > 0) {
        onRemove();
      } else {
        onToggle();
      }
    },
    [news._id, onRemove, onToggle, saved],
  );

  return (
    <CardWrapper>
      <Background
        className="thumbnail"
        images={news.multimedia}
        onClick={cardClickHandler}
      />

      <TextWrapper onClick={cardClickHandler}>
        <Title>{news.headline.main}</Title>
        <Description>
          {news.lead_paragraph.length > 350
            ? `${news.lead_paragraph.slice(0, 350)} ...more`
            : news.lead_paragraph}
        </Description>
        <MetaInfo onClick={(e) => e.stopPropagation()}>
          {`${utils.default.formatDate(news.pub_date)} | 
          ${news.byline.original}`}
          <StarIcon
            className="fa fa-star"
            onClick={startClickHandler}
            saved={
              saved.filter((item: NewsData) => item._id === news._id).length > 0
            }
          />
        </MetaInfo>
      </TextWrapper>
    </CardWrapper>
  );
}
