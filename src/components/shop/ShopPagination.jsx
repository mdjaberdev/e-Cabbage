import React from "react";
import ReactPaginate from "react-paginate";

const ShopPagination = ({
  totalProducts,
  perPage,
  currentPage,
  setCurrentPage,
}) => {
  const pageCount = Math.ceil(totalProducts / perPage);

  if (pageCount <= 1) return null;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  // Safe page index conversion for forcePage
  const safeForcePage = Math.min(Math.max(0, currentPage - 1), pageCount - 1);

  return (
    <div className="mt-12 sm:mt-16 mb-20 sm:mb-28 flex justify-center px-4 w-full">
      <ReactPaginate
        breakLabel="..."
        nextLabel={null}
        previousLabel={null}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        forcePage={safeForcePage}
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center gap-2.5 flex-wrap"
        pageClassName="w-10 h-10 flex items-center justify-center rounded-lg border border-[#D0D5DD] text-[#344054] font-medium text-sm transition-all cursor-pointer hover:bg-gray-50"
        pageLinkClassName="w-full h-full flex items-center justify-center"
        activeClassName="!bg-[#80B500] !border-[#80B500] !text-white"
        disabledClassName="opacity-30 cursor-not-allowed"
        breakClassName="text-gray-400 flex items-center justify-center px-1"
      />
    </div>
  );
};

export default React.memo(ShopPagination);
