import React from "react";
import "../components/css/Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const getPages = (): number[] => {
    const pages: number[] = [];
    for (let i: number = currentPage - 3; i <= currentPage + 3; i++) {
      if (i > 0 && i <= totalPages) {
        pages.push(i);
      }
    }
    return pages;
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {getPages().map((page) => (
        <button
          key={page}
          className={`pagination__button ${
            page === currentPage ? "pagination__button--active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination__button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
