import styled from 'styled-components';

export const Item = styled.li`
  padding: 10px;
  & span:last-of-type {
    margin-left: 20px;
  }
  border-bottom: 1px solid #b7b7bf;
  &:nth-of-type(odd) {
    background-color: #b7b7bf;
  }
`;
