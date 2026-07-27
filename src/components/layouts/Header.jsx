import React, { useState, useEffect, useRef } from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import logo from "/src/assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSearch } from "../../context/SearchContext";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const query = searchQuery ? searchQuery.trim() : "";
    if (!query) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`,
        );
        setSuggestions(data.products.slice(0, 5));
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search submit korle shop page e na giye shudhu suggestions clear korbe ba first item select korbe
  const handleSearch = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      navigate(`/product/${suggestions[0].id}`);
      setSearchQuery("");
      setSuggestions([]);
      setOpenMenu(false);
    }
  };

  const handleSelectProduct = (id) => {
    navigate(`/product/${id}`);
    setSearchQuery("");
    setSuggestions([]);
    setOpenMenu(false);
  };

  return (
    <>
      <Container>
        <div className="flex items-center justify-between my-6">
          <Link to="/">
            <Images srcImg={logo} />
          </Link>

          <div className="hidden lg:flex items-center gap-x-12">
            <ul className="flex items-center gap-x-8 text-[17px] text-[#0A2C3D] font-Nunito font-bold">
              <li className="hover:text-[#80B500] duration-300">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#80B500] duration-300">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-[#80B500] duration-300">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="hover:text-[#80B500] duration-300">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="hover:text-[#80B500] duration-300">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Search Box with Suggestions */}
            <div className="relative" ref={searchRef}>
              <form
                onSubmit={handleSearch}
                className="w-75 flex justify-between items-center py-1 px-3 bg-[#F4F4F4] rounded-[50px]"
              >
                <input
                  type="text"
                  placeholder="Find Products"
                  value={searchQuery || ""}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="outline-none text-sm text-[#797D95] font-Nunito w-full bg-transparent"
                />
                <button
                  type="submit"
                  className="cursor-pointer bg-transparent border-none flex items-center justify-center"
                >
                  <IoSearchOutline className="text-5xl text-white bg-[#80B500] w-20 py-3 rounded-4xl" />
                </button>
              </form>

              {suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                  {suggestions.map((product) => (
                    <li
                      key={product.id}
                      onClick={() => handleSelectProduct(product.id)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 cursor-pointer border-b last:border-none duration-200"
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-10 h-10 object-cover rounded-md"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[#0A2C3D] font-Nunito">
                          {product.title}
                        </span>
                        <span className="text-xs text-gray-500 font-Nunito">
                          ${product.price}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <button
            onClick={() => setOpenMenu(true)}
            className="lg:hidden text-4xl text-[#0A2C3D] cursor-pointer"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </Container>

      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-white z-50 shadow-2xl duration-500 lg:hidden ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <Images srcImg={logo} />
          <button
            onClick={() => setOpenMenu(false)}
            className="text-3xl text-[#0A2C3D] cursor-pointer"
          >
            <HiX />
          </button>
        </div>
        <ul className="flex flex-col gap-y-6 p-6 text-[17px] text-[#0A2C3D] font-Nunito font-bold">
          <li>
            <Link onClick={() => setOpenMenu(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpenMenu(false)} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpenMenu(false)} to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpenMenu(false)} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpenMenu(false)} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
