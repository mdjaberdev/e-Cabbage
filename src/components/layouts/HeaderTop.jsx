import React from "react";
import Container from "../common/Container";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Images from "../common/Images";
import topLogo from "/src/assets/topLogo.png";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


const HeaderTop = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-[#0A472E] py-3 lg:py-4">
      <Container>
        <div className="flex items-center justify-between gap-x-3">
          {/* Left Side */}
          <div className="flex items-center gap-x-2 text-white text-sm lg:text-base font-Nunito">
            <p className="w-auto lg:w-50">
              | Call :<br />
              +1 8008339780
            </p>

            <marquee className="hidden sm:block">Welcome to Xprako!</marquee>
          </div>

          {/* Right Side */}
          <div className="flex gap-x-3 lg:gap-x-4 items-center text-white text-xl lg:text-2xl font-Nunito">
            <Link to={"/login"}>
              <FaRegUser />
            </Link>

            <Link to={"/cart"} className="relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-[#80B500] text-white text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#0A472E]">
                  {totalItems}
                </span>
              )}
            </Link>

            <p className="hidden sm:block">|</p>

            <div className="flex items-center gap-x-1 lg:gap-x-2">
              <Images
                className={"w-5 h-5 lg:w-6.25 lg:h-6.25"}
                srcImg={topLogo}
              />
              <p className="text-sm lg:text-base">EN</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
