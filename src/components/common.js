import styled from 'styled-components';

export const Clearfix = styled.div`
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const Button = styled.button`
  appearance: none;
  background: #666;
  border: 1px solid #666;
  border-radius: 0;
  color: white;
  font-size: 0.6rem;
  transition: border-color 0.1s ease-in;
  padding: 5px;
  margin: 0;

  &:focus,
  &:hover {
    outline: none;
    border-color: #ccc;
  }

  &:active,
  &:disabled {
    border-color: #666;
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;
