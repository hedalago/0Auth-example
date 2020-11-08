import styled from 'styled-components';

export const AppBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: 3rem;
  align-items: center;
  position: sticky;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  align-items: center;
  top: 0;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    min-height: 2.5rem;
  }

  @media only screen and (max-width: 374.97px) {
    min-height: 2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  height: 100%;
  justify-content: space-around;
`;

export const Box = styled.div`
  font-size: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 576px) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 374.97px) {
    font-size: 0.75rem;
  }
`;
