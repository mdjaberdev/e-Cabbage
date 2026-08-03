import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../common/Container";
import { FaAngleRight, FaThList } from "react-icons/fa";
import { IoGridSharp, IoSearchOutline } from "react-icons/io5";
import { MdVerified, MdLocalShipping, MdEco } from "react-icons/md";
import Products from "../common/Products";
import Badge from "../common/Badge";
import { useSearch } from "../../context/SearchContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import bnrLogo from "/src/assets/bannerLogo.png";

const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { searchQuery, setSearchQuery } = useSearch();
  const [sortBy, setSortBy] = useState("best-match");

  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100",
        );
        setAllProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error("Error fetching shop products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...allProducts];


    if (searchQuery && searchQuery.trim() !== "") {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [searchQuery, sortBy, allProducts]);

  const handleShopSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredProducts.length / perPage);

  return (
    <div className="bg-white">
      <Helmet>
        <title>Cabbage Shop - Organic Store</title>
        <meta name="shop" content="welcome to shop page" />
      </Helmet>

      <div className="relative bg-[#F6F9F0] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden select-none border-b border-[#80B500]/15">
    
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#80B500]/15 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#E2ECD5]/70 rounded-full blur-[110px] pointer-events-none -z-10" />

        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
            {/* Left Content Area */}
            <div className="w-full lg:w-[60%] text-center lg:text-left z-10">
              {/* Organic Pill Badge */}
              <div className="inline-flex items-center gap-x-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm border border-[#80B500]/30 mb-5">
                <img
                  src={bnrLogo}
                  alt="Logo"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-[#80B500] text-xs sm:text-sm font-bold font-Nunito uppercase tracking-wider">
                  100% Certified Organic Products
                </span>
              </div>

              {/*  Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl text-gray-900 font-Inter font-black tracking-tight leading-[1.12] mb-4">
                Explore Our Fresh Organic Store
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base font-Nunito max-w-[540px] mb-8 mx-auto lg:mx-0 leading-relaxed">
                Discover handpicked farm-fresh vegetables, organic fruits, and
                healthy essentials delivered right to your doorstep with
                ultimate care.
              </p>

              {/* Breadcrumb Navigation */}
              <div className="inline-flex items-center gap-2 text-gray-600 text-sm font-Nunito font-medium bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-gray-200/80 shadow-sm mx-auto lg:mx-0">
                <Link to="/" className="hover:text-[#80B500] transition-colors">
                  Home
                </Link>
                <FaAngleRight className="text-xs text-[#80B500]" />
                <span className="text-gray-900 font-bold">Shop Collection</span>
              </div>
            </div>
            <div className="w-full lg:w-[38%] z-10">
              <div className="bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-white flex flex-col gap-5">
                <h3 className="text-gray-900 font-Inter font-bold text-lg border-b border-gray-100 pb-3">
                  Why Shop With Us?
                </h3>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-xl shadow-sm">
                    <MdEco />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm font-Inter">
                      100% Natural Harvest
                    </h4>
                    <p className="text-gray-500 text-xs font-Nunito">
                      Directly sourced from trusted local farmers
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-xl shadow-sm">
                    <MdLocalShipping />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm font-Inter">
                      Express Home Delivery
                    </h4>
                    <p className="text-gray-500 text-xs font-Nunito">
                      Fast and temperature-controlled shipping
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-xl shadow-sm">
                    <MdVerified />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm font-Inter">
                      Quality Guaranteed
                    </h4>
                    <p className="text-gray-500 text-xs font-Nunito">
                      Strict quality checks on every order
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Controls Bar */}
        <div className="mt-10 sm:mt-12">
          <div className="flex flex-wrap items-center justify-between py-5 gap-4 border-b border-gray-100">
            <div className="">
              <h4 className="text-Primary text-[22px] sm:text-[25px] font-bold font-Inter">
                Organic Fresh Food & Groceries
              </h4>
              <p className="text-[#666E77] text-[15px] font-Nunito">
                About {filteredProducts.length} results found
              </p>
            </div>

            {/* Per Page Selection */}
            <div className="flex items-center gap-x-1 ml-4 sm:ml-10">
              <h4 className="text-[#0A2C3D] text-base">Per Page:</h4>
              <div className="py-1 px-2 h-7 border border-[#9C9FB7] text-[#9C9FB7] text-[12px] font-Nunito flex items-center rounded">
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

            {/* Sort By Selection */}
            <div className="flex items-center gap-x-1">
              <h4 className="text-[#0A2C3D] text-base">Sort By:</h4>
              <div className="py-1 px-2 h-7 border border-[#9C9FB7] text-[#9C9FB7] text-[12px] font-Nunito flex items-center rounded">
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

            <div className="flex items-center gap-1">
              <div
                onClick={() => setViewMode("grid")}
                className={`p-2 flex items-center justify-center h-7 rounded shadow-sm cursor-pointer transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#80B500] text-white"
                    : "hover:bg-gray-100 text-gray-700 bg-gray-50"
                }`}
              >
                <IoGridSharp />
              </div>
              <div
                onClick={() => setViewMode("list")}
                className={`p-2 flex items-center justify-center h-7 rounded shadow-sm cursor-pointer transition-colors ${
                  viewMode === "list"
                    ? "bg-[#80B500] text-white"
                    : "hover:bg-gray-100 text-gray-700 bg-gray-50"
                }`}
              >
                <FaThList />
              </div>
            </div>

            {/* Search Input */}
            <div className="relative pl-3 bg-[#F4F4F4] rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery || ""}
                onChange={handleShopSearchChange}
                className="outline-0 text-sm text-[#797D95] font-Nunito h-9 w-[196px] bg-transparent"
              />
              <div className="bg-[#80B500] h-9 py-2 absolute top-0 right-0 px-3 flex items-center justify-center">
                <IoSearchOutline className="text-white w-5" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 mt-10 mb-20"
              : "flex flex-col gap-y-5 mt-10 mb-20"
          }
        >
          {currentProducts.length > 0 ? (
            currentProducts.map((item) => {
              const rating = item.rating || 4.5;

              return (
                <div key={item.id} className="relative">
                  <Products
                    id={item.id}
                    productImg={item.thumbnail}
                    productTitle={item.title}
                    productReview={`(${rating})`}
                    productPrice={`$${item.price.toFixed(2)}`}
                    stock={item.stock || 10}
                    className={
                      viewMode === "list"
                        ? "sm:flex-row !flex-row items-center"
                        : ""
                    }
                  />
                  {item.discountPercentage > 0 && (
                    <Badge
                      className={"absolute top-2 left-2 z-10"}
                      badgeTxt={`-${Math.round(item.discountPercentage)}%`}
                    />
                  )}
                </div>
              );
            })
          ) : (
            <div className="col-span-4 text-center py-20 text-gray-500 text-lg font-Nunito">
              No products found matching your search.
            </div>
          )}
        </div>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div className="mt-16.5 mb-29.75 flex justify-center">
            <div className="flex gap-2 items-center">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 border rounded-md font-Nunito text-sm transition-colors duration-200 cursor-pointer ${
                    currentPage === index + 1
                      ? "bg-[#80B500] text-white border-[#80B500]"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Shop;
