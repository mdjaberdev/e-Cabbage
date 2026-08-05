import React from "react";
import Container from "../common/Container";
import { FaRegUser } from "react-icons/fa";
import Images from "../common/Images";
import topLogo from "/src/assets/topLogo.png";
import { Link } from "react-router-dom";
import { FaHeart, FaTruckFast } from "react-icons/fa6"; // 🔹 ট্র্যাকিংয়ের জন্য FaTruckFast ইমপোর্ট করা হলো
import { useWishlist } from "../../context/WishlistContext";

const HeaderTop = () => {
  const { wishlistItems } = useWishlist();

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

            <marquee className="hidden sm:block">Welcome to Cabbage!</marquee>
          </div>

          {/* Right Side */}
          <div className="flex gap-x-3.5 lg:gap-x-5 items-center text-white text-xl lg:text-2xl font-Nunito">
            {/* 🔹 Track Order Icon Link */}
            <Link
              to={"/track-order"}
              title="Track Order"
              className="hover:text-[#80B500] transition-colors"
            >
              <FaTruckFast />
            </Link>

            <Link
              to={"/login"}
              className="hover:text-[#80B500] transition-colors"
            >
              <FaRegUser />
            </Link>

            <Link
              to={"/wishlist"}
              className="relative hover:text-[#80B500] transition-colors"
            >
              <FaHeart />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-[#80B500] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <p className="hidden sm:block">|</p>

            <div className="flex items-center gap-x-1 lg:gap-x-2">
              <Images
                className={"w-5 h-5 lg:w-6.25 lg:h-6.25"}
                srcImg={topLogo}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
