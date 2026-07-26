import React, { useState } from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import logo from "/src/assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Container>
        <div className="flex items-center justify-between my-6">
          {/* Logo */}
          <Link to="/">
            <Images srcImg={logo} />
          </Link>

          {/* Desktop Menu */}
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
                <Link to="#">Pages</Link>
              </li>

              <li className="hover:text-[#80B500] duration-300">
                <Link to="/blog">Blog</Link>
              </li>

              <li className="hover:text-[#80B500] duration-300">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Search */}

            <div className="w-75 flex justify-between items-center py-1 px-3 bg-[#F4F4F4] rounded-[50px]">
              <input
                type="text"
                placeholder="Find Products"
                className="outline-none text-sm text-[#797D95] font-Nunito"
              />

              <IoSearchOutline
                className="
              text-5xl 
              text-white 
              bg-[#80B500] 
              w-20 
              py-3 
              rounded-4xl
              "
              />
            </div>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpenMenu(true)}
            className="lg:hidden text-4xl text-[#0A2C3D]"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </Container>

      {/* Overlay */}

      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="
        fixed 
        inset-0 
        bg-black/40 
        z-40 
        lg:hidden
        "
        ></div>
      )}

      {/* Mobile Sidebar */}

      <div
        className={`
      fixed
      top-0
      right-0
      h-screen
      w-[280px]
      bg-white
      z-50
      shadow-2xl
      duration-500
      lg:hidden

      ${openMenu ? "translate-x-0" : "translate-x-full"}

      `}
      >
        {/* Sidebar Header */}

        <div className="flex items-center justify-between p-5 border-b">
          <Images srcImg={logo} />

          <button
            onClick={() => setOpenMenu(false)}
            className="text-3xl text-[#0A2C3D]"
          >
            <HiX />
          </button>
        </div>

        {/* Mobile Links */}

        <ul
          className="
        flex
        flex-col
        gap-y-6
        p-6
        text-[17px]
        text-[#0A2C3D]
        font-Nunito
        font-bold
        "
        >
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
            <Link to="#">Pages</Link>
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

        {/* Mobile Search */}

        <div
          className="
        mx-6
        flex
        items-center
        justify-between
        bg-[#F4F4F4]
        rounded-full
        px-3
        py-1
        "
        >
          <input
            type="text"
            placeholder="Find Products"
            className="
          outline-none
          bg-transparent
          w-[150px]
          text-sm
          "
          />

          <IoSearchOutline
            className="
          text-4xl
          text-white
          bg-[#80B500]
          p-2
          rounded-full
          "
          />
        </div>
      </div>
    </>
  );
};

export default Header;
