import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem 1.5rem 4rem;
  width: 80rem;
  border: 0;

  @media only screen and (max-width: 1279.98px) {
    display: block;
    max-width: calc(1232px + 3rem);
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1 1 0%;
  max-width: 77rem;
  width: 100%;

  @media only screen and (max-width: 1279.98px) {
    max-width: 77rem !important;
  }
`;

export const ContentList = styled.div`
  margin-left: -8px;
  margin-right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`;
