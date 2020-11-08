import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  transition: all 0.5s;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  padding: 48px 24px;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  border: 1px solid #888;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  width: 77rem;
  height: 48px;
`;

export const SearchInput = styled.input`
  background: transparent;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  font-size: 16px;
  padding-left: 3.125rem;
  color: #888;
  ::placeholder {
    color: #888;
  }
`;

export const SearchIcon = styled.i`
  top: 0;
  display: flex;
  position: absolute;
  align-items: center;
  height: 100%;
  font-size: 16px;
  left: 1.2rem;
  right: auto;
  color: #888;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  heigh: 320px;
  align-items: center;
`;

export const SignUpButton = styled.button`
  display: block;
  width: 6rem;
  height: 2.5rem;
  margin: 1rem 2rem 0 0;
  align-self: flex-end;
  border: none;
  border-radius: 6px;
  background-color: #dfdfdf;
  font-weight: bold;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: #fff;
  }

  &: focus {
    outline: none;
  }

  @media only screen and (max-width: 767.97px) {
    width: 5.5rem;
    height: 2.25rem;
    font-size: 0.85rem;
  }

  @media only screen and (max-width: 575.97px) {
    width: 5rem;
    height: 2rem;
    font-size: 0.75rem;
    margin: 0.7rem 1.5rem 0 0;
  }
`;
