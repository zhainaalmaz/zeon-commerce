import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
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
