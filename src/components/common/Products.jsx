import React, { useState, useEffect } from "react";
import Images from "./Images";
import productStar from "/src/assets/productsStat.png";
import productStarDrk from "/src/assets/productStardrak.png";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { AiOutlineZoomIn, AiOutlineClose } from "react-icons/ai";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext"; // Wishlist hook
import { Link } from "react-router-dom";

const Products = ({
  id,
  className,
  productPrice,
  productReview,
  productTitle,
  productImg,
  stock,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const { addToCart } = useCart();
  const { wishlistItems, toggleWishlist } = useWishlist();

  // Check if this product is already in the wishlist
  const isLoved = wishlistItems.some((item) => item.id === id);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsZoomed(false);
      }
    };
    if (isZoomed) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isZoomed]);

  const hasReview =
    productReview &&
    productReview !== "(0)" &&
    productReview !== "0" &&
    productReview !== "()";

  return (
    <>
      {/* Product Card Container as a Link */}
      <Link
        to={`/product/${id}`}
        className={`group bg-white border border-gray-200 p-4 h-full flex flex-col justify-between transition-all duration-300 hover:border-[#80B500]/50 block cursor-pointer ${className}`}
      >
        <div>
          <div className="relative w-full aspect-square overflow-hidden mb-4 bg-gray-50">
            <Images
              srcImg={productImg}
              className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-x-3">
              {/* Add to Cart Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart({
                    id,
                    productTitle,
                    productPrice,
                    productImg,
                    stock,
                  });
                }}
                aria-label="Add to cart"
                className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 p-3.5 bg-white text-[#80B500] hover:bg-[#80B500] hover:text-white rounded-full shadow-lg cursor-pointer"
              >
                <LuShoppingCart size={18} />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleWishlist({
                    id,
                    productTitle,
                    productPrice,
                    productImg,
                    stock,
                  });
                }}
                aria-label="Add to wishlist"
                className={`translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 p-3.5 bg-white rounded-full shadow-lg cursor-pointer ${
                  isLoved
                    ? "text-red-500 hover:bg-red-500 hover:text-white"
                    : "text-gray-700 hover:bg-[#80B500] hover:text-white"
                }`}
              >
                {isLoved ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
              </button>

              {/* Quick View Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsZoomed(true);
                }}
                aria-label="Quick view"
                className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 p-3.5 bg-white text-gray-700 hover:bg-[#80B500] hover:text-white rounded-full shadow-lg cursor-pointer"
              >
                <AiOutlineZoomIn size={18} />
              </button>
            </div>
          </div>

          <div className="text-left px-1">
            <h4 className="text-gray-800 text-sm font-medium font-Inter leading-tight line-clamp-2 group-hover:text-[#80B500] transition-colors">
              {productTitle}
            </h4>

            {stock !== undefined && (
              <p className="text-xs text-gray-500 mt-1 font-Nunito">
                Stock: <span className="font-bold text-gray-700">{stock}</span>
              </p>
            )}

            {hasReview ? (
              <div className="flex items-center gap-x-2 mt-2 mb-2.5 h-4">
                <div className="flex">
                  <Images srcImg={productStar} className="w-3 h-3" />
                  <Images srcImg={productStar} className="w-3 h-3" />
                  <Images srcImg={productStar} className="w-3 h-3" />
                  <Images srcImg={productStar} className="w-3 h-3" />
                  <Images srcImg={productStarDrk} className="w-3 h-3" />
                </div>
                <span className="text-gray-400 text-xs font-Nunito -mt-0.5">
                  {productReview}
                </span>
              </div>
            ) : (
              <div className="mt-2 mb-2.5 h-4"></div>
            )}
          </div>
        </div>

        <div className="text-left px-1 mt-auto pt-2 border-t border-gray-100 flex items-center justify-between">
          <p className="text-gray-950 text-base font-bold font-Nunito">
            {productPrice}
          </p>
        </div>
      </Link>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row gap-8"
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-3 -right-3 bg-white text-gray-600 p-2.5 rounded-full shadow-md hover:bg-gray-100 duration-200 cursor-pointer"
            >
              <AiOutlineClose size={20} />
            </button>

            <div className="w-full md:w-1/2 aspect-square flex items-center justify-center bg-gray-50 rounded-2xl p-4">
              <Images
                srcImg={productImg}
                className="max-h-full object-contain mix-blend-multiply"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col text-left justify-center">
              <h3 className="text-2xl font-bold font-Inter text-gray-950">
                {productTitle}
              </h3>
              <p className="text-3xl font-bold font-Nunito text-[#80B500] mt-3">
                {productPrice}
              </p>

              {stock !== undefined && (
                <p className="text-xs text-gray-500 mt-2">
                  Available Stock:{" "}
                  <span className="font-bold text-gray-700">{stock}</span>
                </p>
              )}

              <button
                onClick={() => {
                  addToCart({
                    id,
                    productTitle,
                    productPrice,
                    productImg,
                    stock,
                  });
                  setIsZoomed(false);
                }}
                className="mt-6 w-full bg-[#80B500] text-white py-3.5 px-8 rounded-full font-semibold hover:bg-[#6e9c00] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <LuShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
