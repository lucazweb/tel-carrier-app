import styled from 'styled-components';

export const StyledPagination = styled.ul.attrs({
  className: 'pagination',
})``;

export const PageItem = styled.li`
  cursor: pointer;
  &.active {
    .page-link {
      background: #4284f4;
      border-color: #4284f4;
    }
  }
`;

export const PageLink = styled.div.attrs({
  className: 'page-link',
})``;

export const PaginationBtn = styled.div.attrs({
  className: 'page-link',
})`
  cursor: pointer;
`;
