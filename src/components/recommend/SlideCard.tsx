/* eslint-disable no-underscore-dangle */
import React, { SyntheticEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { NewsData } from '../../apis';
import { useSavedDispatch } from '../../hooks';
import { RootState } from '../../store';
import utils from '../../utils';
import {
  SliderCardDesc,
  SliderCardMeta,
  SliderCardPhoto,
  SliderCardStar,
  SliderCardTextWrapper,
  SliderCardTitle,
  SliderCardWrapper,
} from './style';

type SliderCardProp = {
  data: NewsData;
};

const SliderCard = ({ data }: SliderCardProp): JSX.Element => {
  const { saved } = useSelector((state: RootState) => state.saved);
  const { onToggle, onRemove } = useSavedDispatch(data._id, data);

  const cardClickHandler = () => {
    window.open(data.web_url);
  };

  const startClickHandler = useCallback(
    (e: SyntheticEvent<Element>) => {
      e.stopPropagation();
      if (saved.filter((item: NewsData) => item._id === data._id).length > 0) {
        onRemove();
      } else {
        onToggle();
      }
    },
    [data._id, onRemove, onToggle, saved],
  );
  return (
    <SliderCardWrapper className="card">
      <SliderCardPhoto images={data.multimedia} onClick={cardClickHandler} />
      <SliderCardTextWrapper onClick={cardClickHandler}>
        <SliderCardTitle>{data.headline.main}</SliderCardTitle>
        <SliderCardDesc>
          {data.abstract.length > 150
            ? `${data.abstract.slice(0, 150)} ...more`
            : data.abstract}
        </SliderCardDesc>
        <SliderCardMeta>
          {`${utils.formatDate(data.pub_date)} | 
  ${data.byline.original}`}
          <SliderCardStar
            className="fa fa-star"
            onClick={startClickHandler}
            saved={
              // eslint-disable-next-line no-underscore-dangle
              saved.filter((item: NewsData) => item._id === data._id).length > 0
            }
          />
        </SliderCardMeta>
      </SliderCardTextWrapper>
    </SliderCardWrapper>
  );
};

export default SliderCard;
