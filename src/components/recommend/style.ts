import styled from 'styled-components';
import { Multimedia } from '../../apis';

export interface SliderArrowProps {
  type: 'next' | 'prev';
  onClick: () => void;
}

export const SliderNav = styled.div<SliderArrowProps>`
  ${({ type }) => type === 'next' && 'right: 2rem'};
  ${({ type }) => type === 'prev' && 'left: 0.5rem'};
  z-index: 1;
  width: 2rem;
  height: 380px;
  top: 20rem;
  position: absolute;
  background-color: #fff;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  color: #555;
  cursor: pointer;
  user-select: none;

  @media only screen and (max-width: 767.97px) {
    height: 330px;
    ${({ type }) => type === 'next' && 'right: 1.5rem'};
    top: 19.5rem;
  }

  @media only screen and (max-width: 576.97px) {
    font-size: 1rem;
    top: 19rem;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem;
  transition: all 0.5s;
`;

export const SliderCardWrapper = styled.div`
  margin: 0 1rem !important;
  display: flex !important;
  flex-direction: column;
  width: 386px !important;
  height: 360px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 767.97px) {
    height: 320px;
  }
`;

export const SliderCardPhoto = styled.div<{ images: Multimedia[] }>`
  display: flex;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 50%;

  ${(props) =>
    props.images.length === 0 ||
    !props.images.filter((m) => m.subType === 'horizontalMediumAt2X')[0]
      ? `background-color: #eee;`
      : `background-image: url('https://static01.nyt.com/${
          props.images.filter((m) => m.subType === 'horizontalMediumAt2X')[0]
            ?.url
        }?quality=75&auto=webp&disable=upscale');`}

  @media only screen and (max-width: 374.97px) {
    height: 45%;
  }
`;

export const SliderCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  padding: 0.5rem 1rem;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: 767.97px) {
    height: 50%;
    width: 100%;
  }

  @media only screen and (max-width: 374.97px) {
    height: 55%;
  }
`;

export const SliderCardTitle = styled.div`
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;

  @media only screen and (max-width: 767.97px) {
    font-size: 0.85rem;
  }
`;

export const SliderCardDesc = styled.div`
  text-align: left;
  font-size: 0.95rem;
  width: 100%;

  @media only screen and (max-width: 767.97px) {
    font-size: 0.8rem;
  }
`;

export const SliderCardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  font-size: 0.85rem;
  width: 100%;
  color: #888;
  cursor: auto;
  align-items: center;

  @media only screen and (max-width: 767.97px) {
    font-size: 0.8rem;
  }
`;

export const SliderCardStar = styled.i<{ saved: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1.25rem;
  color: ${(props) => (props.saved ? `rgb(245,245,90)` : `#ccc`)};
  cursor: pointer;

  @media only screen and (max-width: 374.97px) {
    font-size: 1rem;
  }
`;
