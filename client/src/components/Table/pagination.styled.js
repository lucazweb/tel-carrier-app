import styled from 'styled-components';
import { Breakpoint } from '../App/app.constants';

export const StyledPagination = styled.ul.attrs({
  className: 'pagination',
})``;

export const PageItem = styled.li`
  cursor: pointer;
  &.active {
    .page-link {
      background: #333;
      border-color: #333;
    }
  }
`;

export const PageItemNumber = styled(PageItem)`
  @media (max-width: ${Breakpoint.sm}em) {
    display: none;
  }
`;

export const PageLink = styled.div.attrs({
  className: 'page-link',
})`
  color: #333;
`;

export const PaginationBtn = styled.div.attrs({
  className: 'page-link',
})`
  color: #333;
  cursor: pointer;
`;
