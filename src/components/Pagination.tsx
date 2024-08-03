import React from "react";
import "../components/css/Pagination.css";

// here i define the types for the pagination
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  // A function that will be called when a user selects a different page. The function receives the new page number as an argument and returns nothing
  onPageChange: (page: number) => void;
}
// here i declare our pagination component which takes PaginationProps as its props
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  // here we define a getPages function which returns an array of numbers
  const getPages = (): number[] => {
    // i declared variable named pages here which is basically an empty array
    const pages: number[] = [];
    // and here is the fun part of populating the empty array
    // this Loops through a range of numbers, starting 3 pages before the current page and ending 3 pages after.
    for (let i: number = currentPage - 3; i <= currentPage + 3; i++) {
      //this if condition checks if the page number i is greater than 0 and less than or equal to totalPages If valid, it adds the page number to the pages array.
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
        //     Calls the onPageChange function with the previous page number when clicked.
        onClick={() => onPageChange(currentPage - 1)}
        // disables the button if the we are on the first page
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {getPages().map((page) => (
        //  maps  the array of page numbers returned by getPages and creates a button for each page.
        <button
          //Uses the page number as the key for each button
          key={page}
          // i created a different style for the current page to display the current page for the viewer
          className={`pagination__button ${
            page === currentPage ? "pagination__button--active" : ""
          }`}
          //   Calls the onPageChange function with the clicked page number as an argument when the button is clicked which is responsible displayong the current index and page
          onClick={() => onPageChange(page)}
          // this is the page the user is on
        >
          {page}
        </button>
      ))}
      <button
        // here we do what the previous page is doing which is Calling the onPageChange function with the next page number  when clicked.
        className="pagination__button"
        onClick={() => onPageChange(currentPage + 1)}
        //  Disables the button if the current page is the last page.
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
