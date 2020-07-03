import styled from 'styled-components';

export const StyledTable = styled.table.attrs({
  className: 'table',
})`
  tbody {
    tr {
      font-size: 0.9em;
      &:hover {
        background: #fdf7c0 !important;
      }
      cursor: pointer;
      &:nth-of-type(odd) {
        background-color: #f3f3f3;
      }
    }
  }
`;

export const StyledRow = styled.tr`
  opacity: ${({ disabled }) => (disabled ? 1 : 0.6)};
  color: ${({ disabled }) => (disabled ? '#4caf50' : '#666')};
`;
