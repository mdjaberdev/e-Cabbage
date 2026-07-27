import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaCircleChevronRight, FaRegHeart, FaHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineZoomIn, AiOutlineClose } from "react-icons/ai";

import trendingImg from "/src/assets/trendingBgImg.png";
import star from "/src/assets/productsStat.png";
import stardark from "/src/assets/productStardrak.png";

import Container from "../common/Container";
import Images from "../common/Images";
import Badge from "../common/Badge";
import { useCart } from "../../context/CartContext";

// ================= Product Card =================

const ProductCard = ({ item, onZoom }) => {
  const [isLoved, setIsLoved] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const productToAdd = {
      id: item.id,
      productTitle: item.title,
      productPrice: `$${item.price.toFixed(2)}`,
      thumbnail: item.thumbnail,
      quantity: 1,
    };

    if (addToCart) {
      addToCart(productToAdd);
    }
  };

  return (
    <div
      className="
        bg-white
        border
        border-[#A6A6C7]
        relative
        group
        p-2
        w-full
        sm:w-[48%]
        lg:w-[23%]
      "
    >
      <Images
        srcImg={item.thumbnail}
        className="
          w-full
          h-48
          object-contain
        "
      />

      <div>
        <h4
          className="
            text-[#647589]
            text-[11px]
            font-Rubik
            mt-2
            capitalize
          "
        >
          {item.category}
        </h4>

        <h3
          className="
            text-Primary
            text-base
            font-Inter
            py-2
            truncate
          "
        >
          {item.title}
        </h3>

        <div className="flex items-center gap-x-3">
          <h4
            className="
              text-[#283C54]
              text-sm
              font-Nunito
            "
          >
            ${item.price.toFixed(2)}
          </h4>

          <div className="flex gap-x-1">
            <Images srcImg={star} className="w-[13px] h-[13px]" />
            <Images srcImg={star} className="w-[13px] h-[13px]" />
            <Images srcImg={star} className="w-[13px] h-[13px]" />
            <Images srcImg={star} className="w-[13px] h-[13px]" />
            <Images srcImg={stardark} className="w-[13px] h-[13px]" />
          </div>
        </div>
      </div>

      {item.discountPercentage > 0 && (
        <Badge
          className="
            -mr-1
            top-5
            rounded-tl-[10px]
            rounded-br-[10px]
          "
          badgeTxt={`-${Math.round(item.discountPercentage)}%`}
        />
      )}

      {/* Hover Buttons */}
      <div
        className="
          opacity-0
          group-hover:opacity-100
          duration-300
          absolute
          bottom-1/2
          left-1/2
          -translate-x-1/2
          flex
          gap-x-2
        "
      >
        {/* Cart */}
        <div
          onClick={handleAddToCart}
          className="
            translate-y-10
            group-hover:translate-y-0
            p-3
            bg-white
            text-[#80B500]
            hover:bg-[#80B500]
            hover:text-white
            duration-200
            rounded-full
            cursor-pointer
          "
        >
          <LuShoppingCart />
        </div>

        {/* Wishlist */}
        <div
          onClick={() => setIsLoved(!isLoved)}
          className={`
            translate-y-10
            group-hover:translate-y-0
            delay-100
            p-3
            bg-white
            rounded-full
            cursor-pointer
            duration-200
            ${
              isLoved
                ? "text-red-500 hover:bg-red-500 hover:text-white"
                : "text-[#80B500] hover:bg-[#80B500] hover:text-white"
            }
          `}
        >
          {isLoved ? <FaHeart /> : <FaRegHeart />}
        </div>

        {/* Zoom */}
        <div
          onClick={() => onZoom(item)}
          className="
            translate-y-10
            group-hover:translate-y-0
            delay-200
            p-3
            bg-white
            text-[#80B500]
            hover:bg-[#80B500]
            hover:text-white
            duration-200
            rounded-full
            cursor-pointer
          "
        >
          <AiOutlineZoomIn />
        </div>
      </div>
    </div>
  );
};

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [zoomedProduct, setZoomedProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=90",
        );
        setProducts(data.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  const handleModalAddToCart = (item) => {
    const productToAdd = {
      id: item.id,
      productTitle: item.title,
      productPrice: `$${item.price.toFixed(2)}`,
      thumbnail: item.thumbnail,
      quantity: 1,
    };

    if (addToCart) {
      addToCart(productToAdd);
    }
  };

  return (
    <>
      <div className="my-16 sm:my-20 lg:my-30">
        <Container>
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto px-4">
            <h3
              className="
                text-Primary
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                font-Inter
              "
            >
              Trending Products
            </h3>

            <p
              className="
                text-[#546375]
                text-sm
                lg:text-base
                font-Rubik
                mt-3
                sm:mt-4
              "
            >
              A highly efficient slip-ring scanner for today's diagnostic
              requirements.
            </p>
          </div>

          {/* First Row */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:flex-wrap
              lg:flex-row
              gap-5
              justify-center
              mt-8
              sm:mt-10
            "
          >
            {/* Offer Card */}
            <div
              className="
                bg-[#F5F5F5]
                p-6
                w-full
                sm:w-[48%]
                lg:w-[25%]
                flex
                flex-col
                justify-center
              "
            >
              <h4
                className="
                  text-[#80B500]
                  text-[10px]
                  font-bold
                  font-Nunito
                "
              >
                FRUITS & ORGANIC
              </h4>

              <h3
                className="
                  text-Primary
                  text-[18px]
                  font-bold
                  font-Inter
                  max-w-[143px]
                  leading-5
                  py-2
                "
              >
                50% off in Fresh Mango Drinks
              </h3>

              <button
                className="
                  flex
                  items-center
                  gap-x-1
                  text-[#80B500]
                  text-[13px]
                  font-bold
                  font-Nunito
                  mt-3
                  cursor-pointer
                "
              >
                Buy Now
                <FaCircleChevronRight />
              </button>
            </div>

            {products.slice(16, 19).map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onZoom={setZoomedProduct}
              />
            ))}
          </div>

          {/* Second Row */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:flex-wrap
              lg:flex-row
              items-center
              gap-5
              justify-center
              mt-5
            "
          >
            {/* Banner Card */}
            <div
              className="
                relative
                w-full
                sm:w-[48%]
                lg:w-[25%]
                overflow-hidden
                min-h-[233px]
              "
            >
              <Images
                srcImg={trendingImg}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  top-0
                  left-5
                  p-6
                "
              >
                <h4
                  className="
                    text-[#80B500]
                    text-[10px]
                    font-bold
                    font-Nunito
                  "
                >
                  - 29% OFF
                </h4>

                <h3
                  className="
                    text-Primary
                    text-[18px]
                    font-bold
                    font-Inter
                    max-w-[143px]
                    leading-5
                    py-2
                  "
                >
                  Green lemon & Orange Juice
                </h3>

                <button
                  className="
                    flex
                    items-center
                    gap-x-1
                    text-[#80B500]
                    text-[13px]
                    font-bold
                    font-Nunito
                    mt-3
                    cursor-pointer
                  "
                >
                  Buy Now
                  <FaCircleChevronRight />
                </button>
              </div>
            </div>

            {products.slice(25, 28).map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onZoom={setZoomedProduct}
              />
            ))}
          </div>
        </Container>
      </div>

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
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <AiOutlineClose size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Image Section */}
              <div className="bg-gray-50 p-4 rounded-xl flex justify-center items-center h-[280px]">
                <Images
                  srcImg={zoomedProduct.thumbnail}
                  className="max-h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Product Info Section */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[#80B500] text-xs font-bold uppercase tracking-wider bg-green-50 px-2.5 py-1 rounded-full">
                    {zoomedProduct.category}
                  </span>

                  <h3 className="text-2xl font-bold text-Primary mt-3">
                    {zoomedProduct.title}
                  </h3>

                  <div className="flex items-center gap-x-2 my-2">
                    <div className="flex gap-x-1">
                      <Images srcImg={star} className="w-[14px] h-[14px]" />
                      <Images srcImg={star} className="w-[14px] h-[14px]" />
                      <Images srcImg={star} className="w-[14px] h-[14px]" />
                      <Images srcImg={star} className="w-[14px] h-[14px]" />
                      <Images srcImg={stardark} className="w-[14px] h-[14px]" />
                    </div>
                    <span className="text-xs text-gray-400">(4.0)</span>
                  </div>

                  <p className="text-2xl font-extrabold text-[#80B500] my-2">
                    ${zoomedProduct.price.toFixed(2)}
                  </p>

                  <p className="text-sm text-[#647589] line-clamp-3 mt-2 leading-relaxed">
                    {zoomedProduct.description}
                  </p>
                </div>

                {/* Modal Action Button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => {
                      handleModalAddToCart(zoomedProduct);
                      setZoomedProduct(null);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-[#80B500] hover:bg-[#6e9c00] text-white py-3 rounded-xl font-bold transition-colors duration-200 cursor-pointer shadow-md"
                  >
                    <LuShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrendingProducts;
