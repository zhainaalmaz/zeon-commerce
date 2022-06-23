import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <div className="pagination_container">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        activeLinkClassName="active"
      />
    </div>
  );
};

export default Pagination;
