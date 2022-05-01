// Component that handles the UI and all the functionalities of pagination feature

import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, setPageNumber }) => {
  let pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="w-full h-full mb-4">
      <ReactPaginate
        className="flex justify-center items-center my-4 gap-6 text-white w-full m-14"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName={`text-md h-10 w-16 text-white hidden md:flex justify-center p-4 rounded-md items-center ${
          !info.prev
            ? "bg-gray-400 pointer-events-none"
            : "bg-gradient-to-r from-indigo-600 to-cyan-400"
        }`}
        nextClassName={`text-md h-10 w-16 text-white hidden md:flex justify-center p-2 rounded-md items-center ${
          !info.next
            ? "bg-gray-400 pointer-events-none"
            : "bg-gradient-to-r from-indigo-600 to-cyan-400"
        }`}
        activeClassName="text-blue-300 underline underline-offset-4"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="hover:bg-indigo-600 h-10 w-8 flex justify-center items-center rounded-md h-full hover:text-white"
        pageLinkClassName="p-2"
      />
    </div>
  );
};

export default Pagination;
