import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12];

function Items({ currentItems }) {
  return (
    <div className="flex gap-4">
      {currentItems &&
        currentItems.map((item) => (
          <div key={item} className="p-4  border rounded shadow">
            <h3>{item}</h3>
          </div>
        ))}
    </div>
  );
}

function Pagination({ itemsPerPage }) {

  const [itemOffset, setItemOffset] = useState(0);

  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="→"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="←"
        renderOnZeroPageCount={null}
        containerClassName={"flex items-center justify-center gap-2 "}
        pageClassName="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 font-medium transition-all"
        activeClassName="bg-[#82b400] text-white shadow-lg"
        previousClassName="text-gray-400 text-xl px-2"
        nextClassName="text-[#82b400] text-xl px-2"
        disabledClassName="opacity-30 cursor-not-allowed"
        breakClassName="text-gray-400"
      />
    </>
  );
}

export default Pagination