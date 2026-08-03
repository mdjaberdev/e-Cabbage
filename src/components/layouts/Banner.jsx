import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bnrLogo from "/src/assets/bannerLogo.png";
import {
  MdArrowRightAlt,
  MdStar,
  MdCheckCircle,
  MdShoppingCart,
} from "react-icons/md";
import axios from "axios";

import trustOne from "/src/assets/trustOne.png";
import trustTwo from "/src/assets/trustTwo.png";
import trustThree from "/src/assets/trustThree.png";
import trustFour from "/src/assets/trustFour.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Images from "../common/Images";
import Container from "../common/Container";

const Banner = () => {
  const [sliderProducts, setSliderProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBannerProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products/category/groceries",
        );
        setSliderProducts(data.products);
      } catch (error) {
        console.error("Error fetching banner products:", error);
      }
    };

    fetchBannerProducts();
  }, []);

  const bannerSlides =
    sliderProducts.length > 0 ? sliderProducts.slice(7, 11) : [];

  return (
    <div className="relative bg-[#F6F9F0] pb-28 sm:pb-32 lg:pb-36 overflow-hidden select-none [&_.swiper-pagination]:!bottom-[20px] sm:[&_.swiper-pagination]:!bottom-[24px] [&_.swiper-pagination]:!flex [&_.swiper-pagination]:!justify-center [&_.swiper-pagination]:!items-center [&_.swiper-pagination]:!gap-2.5 [&_.swiper-pagination]:!z-20 [&_.swiper-pagination-bullet]:!w-[10px] sm:[&_.swiper-pagination-bullet]:!w-[24px] [&_.swiper-pagination-bullet]:!h-[10px] [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:!bg-[#80b500]/30 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!transition-all [&_.swiper-pagination-bullet]:!duration-500 [&_.swiper-pagination-bullet-active]:!w-[42px] [&_.swiper-pagination-bullet-active]:!bg-[#80B500] [&_.swiper-slide]:!opacity-0 [&_.swiper-slide]:!pointer-events-none [&_.swiper-slide-active]:!opacity-100 [&_.swiper-slide-active]:!pointer-events-auto">
      <div className="absolute top-[-10%] right-[-5%] w-[450px] h-[450px] bg-[#80B500]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[-5%] w-[350px] h-[350px] bg-[#E2ECD5]/60 rounded-full blur-[100px] pointer-events-none -z-10" />

      {bannerSlides.length > 0 ? (
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          watchSlidesProgress={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          observer={true}
          observeParents={true}
        >
          {bannerSlides.map((product) => (
            <SwiperSlide key={product.id}>
              <Container>
                <div className="flex flex-col lg:flex-row items-center justify-between pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-28 gap-8 lg:gap-4">
                  {/* Left Content */}
                  <div className="text-center lg:text-left w-full lg:w-[55%] z-10">
                    <div className="inline-flex items-center gap-x-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm border border-[#80B500]/30 mb-5">
                      <Images
                        srcImg={bnrLogo}
                        className="w-4 h-4 object-contain"
                      />
                      <span className="text-[#80B500] text-xs sm:text-sm font-bold font-Nunito uppercase tracking-wider">
                        100% Organic & Farm Fresh
                      </span>
                    </div>

                    {/* Product Title */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl text-gray-900 font-Inter font-black leading-[1.12] tracking-tight mb-4">
                      {product.title}
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base font-Nunito line-clamp-2 max-w-[540px] mb-6 mx-auto lg:mx-0 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mb-8 text-sm font-Nunito font-semibold text-gray-700">
                      <div className="flex items-center gap-1.5">
                        <MdCheckCircle className="text-[#80B500] text-lg" />
                        <span>Fresh Harvested</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MdCheckCircle className="text-[#80B500] text-lg" />
                        <span>No Pesticides</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MdCheckCircle className="text-[#80B500] text-lg" />
                        <span>Fast Express Delivery</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                      {/* CTA Button */}
                      <button
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="w-full sm:w-auto flex items-center justify-center gap-x-3 py-4 px-8 rounded-full bg-[#80B500] text-white text-base font-Nunito font-bold cursor-pointer shadow-lg shadow-[#80B500]/30 hover:bg-[#6c9b00] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
                      >
                        <MdShoppingCart className="text-xl" />
                        <span>Order Now</span>
                        <MdArrowRightAlt className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />
                      </button>

                      {/* Rating */}
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full border border-gray-200/80 shadow-sm">
                        <div className="flex items-center text-amber-400 text-lg">
                          <MdStar />
                        </div>
                        <span className="text-sm font-extrabold text-gray-800 font-Inter">
                          {product.rating}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                          (Top Rated)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-full lg:w-[45%] flex justify-center items-center relative cursor-pointer group pt-4 lg:pt-0"
                  >
                    <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] bg-gradient-to-tr from-[#80B500]/25 to-[#80B500]/5 rounded-full blur-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-6 sm:left-12 lg:left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white flex flex-col items-start transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 font-Nunito">
                        Special Price
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-[#80B500] font-Inter">
                          ${product.price}
                        </span>
                        {product.discountPercentage && (
                          <span className="text-xs font-bold text-rose-500 bg-rose-50 px-1.5 py-0.5 rounded">
                            -{Math.round(product.discountPercentage)}%
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Product Thumbnail */}
                    <div className="w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center p-6">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="bg-[#F6F9F0] py-44 text-center font-Nunito text-lg font-semibold text-gray-400 animate-pulse">
          Loading Fresh Cabbage & Groceries...
        </div>
      )}

     
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-14 lg:-mt-16">
        <div className="bg-white/90 backdrop-blur-xl shadow-2xl shadow-gray-200/60 p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 rounded-3xl border border-gray-100/80">
          <TrustItem
            img={trustOne}
            title="Curated Products"
            desc="High quality selected"
          />
          <TrustItem
            img={trustTwo}
            title="Handmade Organic"
            desc="Directly from farmers"
          />
          <TrustItem
            img={trustThree}
            title="100% Natural"
            desc="No chemicals added"
          />
          <TrustItem
            img={trustFour}
            title="Express Shipping"
            desc="Free over $75.00 order"
            isLast={true}
          />
        </div>
      </div>
    </div>
  );
};

const TrustItem = ({ img, title, desc, isLast }) => {
  return (
    <div
      className={`
        flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 hover:bg-[#F6F9F0] group
        ${!isLast ? "lg:border-r lg:border-gray-100 lg:pr-6" : ""}
      `}
    >
      <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#F6F9F0] flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
        <Images srcImg={img} className="w-7 h-7 object-contain" />
      </div>

      <div>
        <h4 className="text-gray-900 text-base lg:text-lg font-Inter font-bold leading-tight">
          {title}
        </h4>
        <p className="text-gray-500 text-xs sm:text-sm font-Nunito mt-1">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Banner;
