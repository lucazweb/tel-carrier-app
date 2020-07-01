import React, { useState, useEffect } from 'react';
import {
  StyledPagination,
  PageItem,
  PageLink,
  PaginationBtn,
} from './pagination.styled';
import { connect } from 'react-redux';
import { getNumbers } from '../../store/numbers';

const PaginationComponent = ({ total, getNumbers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i < total; i++) {
      pages.push(i);
    }
    return pages;
  };

  useEffect(() => {
    if (pages.length === 0 && total) {
      const pages = renderPages();
      setPages(pages);
    }
  });

  const handlePageChange = (page) => {
    getNumbers(page);
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage !== pages[pages.length - 1]) {
      getNumbers(currentPage + 1);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage !== pages[0]) {
      getNumbers(currentPage - 1);
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <nav aria-label="Page navigation example">
          <StyledPagination>
            <PageItem>
              <PaginationBtn onClick={() => handlePrevPage()}>
                Previous
              </PaginationBtn>
            </PageItem>
            {total &&
              pages.length > 0 &&
              pages.map((page, i) => (
                <PageItem
                  key={i}
                  className={
                    currentPage === i + 1 ? 'page-item active' : 'page-item'
                  }
                >
                  <PageLink
                    onClick={() => handlePageChange(page)}
                    className="page-link"
                  >
                    {page}
                  </PageLink>
                </PageItem>
              ))}
            <PageItem>
              <PaginationBtn onClick={() => handleNextPage()}>
                Next
              </PaginationBtn>
            </PageItem>
          </StyledPagination>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = ({ numbers: { totalPages: total } }) => {
  console.log(total);
  return {
    total,
  };
};
const mapDispatch = {
  getNumbers,
};

export const Pagination = connect(
  mapStateToProps,
  mapDispatch
)(PaginationComponent);
