import styled from 'styled-components';

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
