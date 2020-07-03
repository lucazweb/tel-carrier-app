import styled from 'styled-components';

export const DetailBox = styled.div``;

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  &:nth-child(odd) {
    background: #f3f3f3;
  }
`;
