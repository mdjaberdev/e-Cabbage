import React from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import logo from "/src/assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="flex items-center justify-between my-6">
        <div className="">
          <Link to={"/"}>
            <Images srcImg={logo} />
          </Link>
        </div>
        <div className="flex items-center gap-x-12">
          <div className="">
            <ul className="flex items-center gap-x-8 text-[17px] text-[#0A2C3D] font-Nunito font-bold">
              <li className="hover:text-[#80B500] duration-300">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:text-[#80B500] duration-300">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="hover:text-[#80B500] duration-300">
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li className="hover:text-[#80B500] duration-300">
                <Link to={"/pages"}>Pages</Link>
              </li>
              <li className="hover:text-[#80B500] duration-300">
                <Link to={"/pages"}>Blog</Link>
              </li>
              <li className="hover:text-[#80B500] duration-300">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-[300px] flex justify-between items-center py-1 px-3 bg-[#F4F4F4] rounded-[50px]">
            <input
              type="text"
              placeholder="Find Products"
              className="outline-0 text-sm text-[#797D95] font-Nunito"
            />
            <IoSearchOutline className="text-5xl text-white bg-[#80B500] w-[80px] py-3 rounded-4xl" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
