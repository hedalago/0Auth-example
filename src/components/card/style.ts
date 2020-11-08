import styled from 'styled-components';
import { Multimedia } from '../../apis';

export const CardWrapper = styled.div`
  display: flex;
  position: relative;
  width: 90%;
  height: 15rem;
  border-bottom: 1px solid #ddd;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-bottom: 1rem;
  transition: all 0.5s;

  @media only screen and (min-width: 1920px) {
    height: 13rem;
  }

  @media only screen and (max-width: 767.97px) {
    width: 95%;
    flex-direction: column;
    height: 23rem;
  }

  @media only screen and (max-width: 575.97px) {
    height: 27rem;
  }

  @media only screen and (max-width: 374.97px) {
    width: 100%;
  }
`;

// TODO: Apply image lazy loading
export const Background = styled.div<{ images: Multimedia[] }>`
  display: flex;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 225px;
  height: 190px;
  ${(props) =>
    props.images.length === 0 ||
    !props.images.filter((m) => m.subType === 'horizontalMediumAt2X')[0]
      ? `background-color: #eee;`
      : `background-image: url('https://static01.nyt.com/${
          props.images.filter((m) => m.subType === 'horizontalMediumAt2X')[0]
            ?.url
        }?quality=75&auto=webp&disable=upscale');`}

  @media only screen and (max-width: 767.97px) {
    width: 100%;
    height: 50%;
  }

  @media only screen and (max-width: 374.97px) {
    height: 45%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  padding: 1rem;
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

export const Title = styled.div`
  text-align: left;
  font-size: 1.4rem;
  font-weight: bold;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 767.97px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 374.97px) {
    font-size: 0.8rem;
  }
`;

export const Description = styled.div`
  text-align: left;
  font-size: 0.95rem;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    font-size: 0.85rem;
  }

  @media only screen and (max-width: 767.97px) {
    font-size: 0.75rem;
  }

  @media only screen and (max-width: 374.97px) {
    font-size: 0.7rem;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  font-size: 0.85rem;
  width: 100%;
  color: #888;
  cursor: auto;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 767.97px) {
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 374.97px) {
    font-size: 0.65rem;
  }
`;

export const StarIcon = styled.i<{ saved: boolean }>`
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
