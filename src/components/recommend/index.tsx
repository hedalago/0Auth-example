/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'font-awesome/css/font-awesome.min.css';

import { useSelector } from 'react-redux';
import { NewsData, fetchNewsData } from '../../apis';
import {
  SliderWrapper,
  SliderCardWrapper,
  SliderCardTitle,
  SliderCardTextWrapper,
  SliderCardStar,
  SliderCardDesc,
  SliderCardMeta,
  SliderCardPhoto,
  SliderNav,
  SliderArrowProps,
} from './style';
import * as utils from '../../utils';
import { RootState } from '../../store';

const SliderArrow = (props: SliderArrowProps) => {
  const { type, ...rest } = props;

  return (
    <SliderNav type={type} {...rest}>
      {type === 'next' ? '>' : '<'}
    </SliderNav>
  );
};

export default function Recommend(): JSX.Element {
  const sliderRef = useRef<Slider>(null);
  const sliderWrapperRef = useRef<HTMLDivElement>(null);

  const [recommendList, setRecommendList] = useState<NewsData[]>([]);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [maxNumberOfCardsToShow, setMaxNumberOfCardsToShow] = useState<number>(
    0,
  );

  const { saved } = useSelector((state: RootState) => state.saved);

  const handleChangeSlide = (currentSlide: number) => {
    const leftArrowVisible = currentSlide !== 0;

    const rightArrowVisible =
      currentSlide <= recommendList.length - maxNumberOfCardsToShow;

    setShowLeftArrow(leftArrowVisible);

    setShowRightArrow(rightArrowVisible);
  };

  const settings = {
    centerMode: false,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    arrows: false,
    afterChange: (currentSlide: number) => handleChangeSlide(currentSlide),
  };

  useEffect(() => {
    fetchNewsData('tech', 0).then((value: NewsData[]) => {
      setRecommendList(value);
    });

    const wrapperWidth = sliderWrapperRef?.current?.clientWidth || 0;

    const maxNumberOfCards = Math.ceil(wrapperWidth / 418);

    setMaxNumberOfCardsToShow(maxNumberOfCards);

    setShowRightArrow(recommendList.length > maxNumberOfCards);
  }, [recommendList.length]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {showLeftArrow && (
        <SliderArrow
          type="prev"
          onClick={() => sliderRef.current?.slickPrev()}
        />
      )}
      <SliderWrapper ref={sliderWrapperRef}>
        <h2>Recommended for you</h2>
        <br />
        <Slider {...settings} ref={sliderRef}>
          {recommendList.map((data: NewsData) => {
            return (
              <SliderCardWrapper className="card">
                <SliderCardPhoto images={data.multimedia} />
                <SliderCardTextWrapper>
                  <SliderCardTitle>{data.headline.main}</SliderCardTitle>
                  <SliderCardDesc>
                    {data.abstract.length > 150
                      ? `${data.abstract.slice(0, 150)} ...more`
                      : data.abstract}
                  </SliderCardDesc>
                  <SliderCardMeta>
                    {`${utils.default.formatDate(data.pub_date)} | 
          ${data.byline.original}`}
                    <SliderCardStar
                      className="fa fa-star"
                      saved={
                        // eslint-disable-next-line no-underscore-dangle
                        saved.filter((item: NewsData) => item._id === data._id)
                          .length > 0
                      }
                    />
                  </SliderCardMeta>
                </SliderCardTextWrapper>
              </SliderCardWrapper>
            );
          })}
        </Slider>
      </SliderWrapper>
      {showRightArrow && (
        <SliderArrow
          type="next"
          onClick={() => sliderRef.current?.slickNext()}
        />
      )}
    </div>
  );
}
