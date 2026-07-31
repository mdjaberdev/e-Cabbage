import React, { useState, useEffect } from "react";
import Images from "./Images";
import productStar from "/src/assets/productsStat.png";
import productStarDrk from "/src/assets/productStardrak.png";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { AiOutlineZoomIn, AiOutlineClose } from "react-icons/ai";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";

const Products = ({
  id,
  className,
  productPrice,
  productReview,
  productTitle,
  productImg,
  stock,
  itemData,
}) => {
  const [zoomedProduct, setZoomedProduct] = useState(null);
  const { cartItems, addToCart } = useCart();
  const { wishlistItems, toggleWishlist } = useWishlist();

  const isLoved = wishlistItems.some((item) => item.id === id);
  const isInCart = cartItems.some((item) => item.id === id);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setZoomedProduct(null);
      }
    };
    if (zoomedProduct) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomedProduct]);

  const handleModalAddToCart = (product) => {
    const productToAdd = {
      id: product.id || id,
      productTitle: product.title || productTitle,
      productPrice: product.price
        ? `$${product.price.toFixed(2)}`
        : productPrice,
      productImg: product.thumbnail || productImg,
      thumbnail: product.thumbnail || productImg,
      quantity: 1,
    };
    if (addToCart) {
      addToCart(productToAdd);
    }
  };

  const hasReview =
    productReview &&
    productReview !== "(0)" &&
    productReview !== "0" &&
    productReview !== "()";

  return (
    <>
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
                className={`translate-y-4 group-hover:translate-y-0 transition-all duration-300 p-3.5 rounded-full shadow-lg cursor-pointer ${
                  isInCart
                    ? "bg-[#80B500] text-white hover:bg-[#6e9c00]"
                    : "bg-white text-[#80B500] hover:bg-[#80B500] hover:text-white"
                }`}
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
                className={`translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 p-3.5 rounded-full shadow-lg cursor-pointer ${
                  isLoved
                    ? "bg-[#80B500] text-white hover:bg-[#6e9c00]"
                    : "bg-white text-[#80B500] hover:bg-[#80B500] hover:text-white"
                }`}
              >
                {isLoved ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
              </button>

              {/* Quick View Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setZoomedProduct(
                    itemData || {
                      id,
                      title: productTitle,
                      price: parseFloat(productPrice.replace("$", "")) || 0,
                      thumbnail: productImg,
                      category: stock || "Organic",
                      description: productTitle,
                    },
                  );
                }}
                aria-label="Quick view"
                className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 p-3.5 bg-white text-[#80B500] hover:bg-[#80B500] hover:text-white rounded-full shadow-lg cursor-pointer"
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

      {/* Unified Zoom Modal */}
      {zoomedProduct && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setZoomedProduct(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setZoomedProduct(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-200 cursor-pointer z-10"
            >
              <AiOutlineClose size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Image Section */}
              <div className="bg-gray-50 p-6 rounded-xl flex justify-center items-center h-[300px]">
                <Images
                  srcImg={zoomedProduct.thumbnail}
                  className="max-h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Product Info Section */}
              <div className="flex flex-col justify-between text-left">
                <div>
                  <span className="text-[#80B500] text-xs font-bold uppercase tracking-wider bg-green-50 px-2.5 py-1 rounded-full font-Nunito">
                    {zoomedProduct.category}
                  </span>

                  <h3 className="text-2xl font-bold text-Primary mt-3 font-Inter">
                    {zoomedProduct.title}
                  </h3>

                  <div className="flex items-center gap-x-2 my-2.5">
                    <div className="flex gap-x-1">
                      <Images
                        srcImg={productStar}
                        className="w-[14px] h-[14px]"
                      />
                      <Images
                        srcImg={productStar}
                        className="w-[14px] h-[14px]"
                      />
                      <Images
                        srcImg={productStar}
                        className="w-[14px] h-[14px]"
                      />
                      <Images
                        srcImg={productStar}
                        className="w-[14px] h-[14px]"
                      />
                      <Images
                        srcImg={productStarDrk}
                        className="w-[14px] h-[14px]"
                      />
                    </div>
                    <span className="text-xs text-gray-400 font-Nunito">
                      (4.0)
                    </span>
                  </div>

                  <p className="text-2xl font-extrabold text-[#80B500] my-2 font-Nunito">
                    ${zoomedProduct.price.toFixed(2)}
                  </p>

                  <p className="text-sm text-[#647589] line-clamp-3 mt-2 leading-relaxed font-Inter">
                    {zoomedProduct.description}
                  </p>
                </div>

                {/* Modal Action Buttons */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex gap-3">
                  <button
                    onClick={() => {
                      handleModalAddToCart(zoomedProduct);
                      setZoomedProduct(null);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#80B500] hover:bg-[#6e9c00] text-white py-3 rounded-xl font-bold transition-colors duration-200 cursor-pointer shadow-md"
                  >
                    <LuShoppingCart size={18} />
                    Add to Cart
                  </button>

                  <Link
                    to={`/product/${zoomedProduct.id}`}
                    onClick={() => setZoomedProduct(null)}
                    className="px-4 flex items-center justify-center border border-gray-300 hover:border-[#80B500] text-gray-700 hover:text-[#80B500] py-3 rounded-xl font-bold transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
