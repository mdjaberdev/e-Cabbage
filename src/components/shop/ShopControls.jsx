import React, { useState, useEffect } from "react";
import { FaThList } from "react-icons/fa";
import { IoGridSharp, IoSearchOutline } from "react-icons/io5";

const ShopControls = ({
  allProducts,
  setFilteredProducts,
  viewMode,
  setViewMode,
  perPage,
  setPerPage,
  setCurrentPage,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("best-match");

  useEffect(() => {
    let result = [...allProducts];

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title?.toLowerCase().includes(query) ||
          item.category?.toLowerCase().includes(query),
      );
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [searchQuery, sortBy, allProducts, setFilteredProducts, setCurrentPage]);

  return (
    <div className="mt-8 sm:mt-12">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-5 gap-5 border-b border-gray-100">
        <div>
          <h4 className="text-Primary text-xl sm:text-[25px] font-bold font-Inter">
            Organic Fresh Food & Groceries
          </h4>
        </div>

        <div className="w-full lg:w-auto flex flex-wrap items-center justify-between lg:justify-end gap-3 sm:gap-4">
          {/* Per Page */}
          <div className="flex items-center gap-x-1.5">
            <span className="text-[#0A2C3D] text-xs sm:text-base font-Nunito">
              Per Page:
            </span>
            <div className="py-1 px-2 h-7 border border-[#9C9FB7] text-[#9C9FB7] text-xs font-Nunito flex items-center rounded bg-white">
              <select
                value={perPage}
                onChange={(e) => {
                  setPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="outline-0 bg-transparent cursor-pointer"
              >
                <option value={12}>12</option>
                <option value={16}>16</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-x-1.5">
            <span className="text-[#0A2C3D] text-xs sm:text-base font-Nunito">
              Sort By:
            </span>
            <div className="py-1 px-2 h-7 border border-[#9C9FB7] text-[#9C9FB7] text-xs font-Nunito flex items-center rounded bg-white">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="outline-0 bg-transparent cursor-pointer"
              >
                <option value="best-match">Best Match</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </div>

          {/* View Mode Buttons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`p-2 flex items-center justify-center h-7 rounded shadow-sm cursor-pointer transition-colors ${
                viewMode === "grid"
                  ? "bg-[#80B500] text-white"
                  : "hover:bg-gray-100 text-gray-700 bg-gray-50"
              }`}
              aria-label="Grid View"
            >
              <IoGridSharp />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={`p-2 flex items-center justify-center h-7 rounded shadow-sm cursor-pointer transition-colors ${
                viewMode === "list"
                  ? "bg-[#80B500] text-white"
                  : "hover:bg-gray-100 text-gray-700 bg-gray-50"
              }`}
              aria-label="List View"
            >
              <FaThList />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative pl-3 bg-[#F4F4F4] rounded-md overflow-hidden w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-0 text-sm text-[#797D95] font-Nunito h-9 w-full sm:w-[196px] bg-transparent pr-12"
            />
            <div className="bg-[#80B500] h-9 py-2 absolute top-0 right-0 px-3 flex items-center justify-center">
              <IoSearchOutline className="text-white w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ShopControls);
