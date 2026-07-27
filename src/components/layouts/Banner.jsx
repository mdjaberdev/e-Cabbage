import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bnrLogo from "/src/assets/bannerLogo.png";
import { MdArrowRightAlt, MdStar } from "react-icons/md";
import axios from "axios";

import trustOne from "/src/assets/trustOne.png";
import trustTwo from "/src/assets/trustTwo.png";
import trustThree from "/src/assets/trustThree.png";
import trustFour from "/src/assets/trustFour.png";

// Swiper Components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper Essential CSS
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
          "https://dummyjson.com/products?limit=4"
        );
        setSliderProducts(data.products);
      } catch (error) {
        console.error("Error fetching banner products:", error);
      }
    };

    fetchBannerProducts();
  }, []);

  return (
    <div className="relative bg-[#F9F4EE] pb-24 sm:pb-28 lg:pb-32 [&_.swiper-pagination]:!bottom-[15px] sm:[&_.swiper-pagination]:!bottom-[20px] [&_.swiper-pagination]:!flex [&_.swiper-pagination]:!justify-center [&_.swiper-pagination]:!items-center [&_.swiper-pagination]:!gap-2 [&_.swiper-pagination]:!z-20 [&_.swiper-pagination-bullet]:!w-[13px] [&_.swiper-pagination-bullet]:!h-[13px] [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:!bg-[#80b500] [&_.swiper-pagination-bullet]:!border-2 [&_.swiper-pagination-bullet]:!border-white [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!transition-all [&_.swiper-pagination-bullet]:!duration-300 [&_.swiper-pagination-bullet-active]:!scale-125 [&_.swiper-pagination-bullet-active]:!border-none [&_.swiper-slide]:!opacity-0 [&_.swiper-slide]:!pointer-events-none [&_.swiper-slide-active]:!opacity-100 [&_.swiper-slide-active]:!pointer-events-auto">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        watchSlidesProgress={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
      >
        {sliderProducts.length > 0 ? (
          sliderProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <Container>
                <div
                  className="
                    flex
                    flex-col
                    lg:flex-row
                    items-center
                    justify-between
                    pt-16
                    sm:pt-20
                    lg:pt-28
                    pb-20
                    sm:pb-24
                    lg:pb-28
                  "
                >
                  {/* Content Area */}
                  <div
                    className="
                      mt-5
                      lg:mt-0
                      text-center
                      lg:text-left
                      w-full
                      lg:w-[55%]
                    "
                  >
                    {/* Badge */}
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-x-2
                        bg-white/80
                        backdrop-blur-sm
                        px-4
                        py-1.5
                        rounded-full
                        shadow-sm
                        mb-4
                      "
                    >
                      <Images srcImg={bnrLogo} className="w-5 h-5" />
                      <h4
                        className="
                          text-Primary
                          text-xs
                          sm:text-sm
                          font-semibold
                          font-Nunito
                        "
                      >
                        100% Genuine Product
                      </h4>
                    </div>

                    {/* Title */}
                    <h1
                      className="
                        text-2xl
                        sm:text-4xl
                        lg:text-5xl
                        text-Primary
                        font-Inter
                        font-extrabold
                        leading-tight
                        lg:leading-tight
                        mb-4
                      "
                    >
                      {product.title}
                    </h1>

                    {/* Description */}
                    <p
                      className="
                        text-gray-600
                        text-sm
                        sm:text-base
                        font-Nunito
                        line-clamp-2
                        max-w-[600px]
                        mb-6
                        mx-auto
                        lg:mx-0
                      "
                    >
                      {product.description}
                    </p>

                    {/* Price & Rating Box */}
                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        lg:justify-start
                        gap-6
                        mb-8
                      "
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#80B500] font-Inter">
                          ${product.price}
                        </span>
                        {product.discountPercentage && (
                          <span className="text-xs text-red-500 font-semibold bg-red-50 px-2 py-0.5 rounded">
                            -{Math.round(product.discountPercentage)}% Off
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100">
                        <MdStar className="text-yellow-400 text-lg" />
                        <span className="text-sm font-bold text-gray-800">
                          {product.rating}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="
                        mx-auto
                        lg:mx-0
                        flex
                        items-center
                        gap-x-2
                        py-4
                        px-8
                        rounded-full
                        bg-[#80B500]
                        text-white
                        text-base
                        font-Nunito
                        font-semibold
                        cursor-pointer
                        shadow-lg
                        shadow-[#80B500]/25
                        hover:bg-[#6c9b00]
                        hover:shadow-xl
                        transition-all
                        duration-300
                      "
                    >
                      Explore Products
                      <MdArrowRightAlt className="text-2xl" />
                    </button>
                  </div>

                  {/* Image Container with Glow Backdrop */}
                  <div
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="
                      mt-10
                      lg:mt-0
                      w-full
                      lg:w-[42%]
                      flex
                      justify-center
                      relative
                      cursor-pointer
                    "
                  >
                    <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] bg-[#80B500]/15 rounded-full blur-2xl -z-10" />
                    <div className="w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-3xl overflow-hidden bg-white/85 backdrop-blur-md shadow-2xl border border-white/50 flex items-center justify-center p-6">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="
                          w-full
                          h-full
                          object-contain
                          transition-transform
                          duration-700
                          hover:scale-110
                        "
                      />
                    </div>
                  </div>
                </div>
              </Container>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="bg-[#F9F4EE] py-40 text-center font-Nunito text-xl text-gray-500">
              Loading Banner Products...
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      {/* Trust Section */}
      <div
        className="
          relative
          z-30
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          -mt-12
          sm:-mt-14
          lg:-mt-16
        "
      >
        <div
          className="
            bg-white
            shadow-2xl
            shadow-gray-200/60
            p-6
            lg:p-8
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            rounded-2xl
            border
            border-gray-100
          "
        >
          <TrustItem img={trustOne} title="Curated Products" />
          <TrustItem img={trustTwo} title="Handmade" />
          <TrustItem img={trustThree} title="100% Natural" />
          <TrustItem img={trustFour} title="Shipping" isLast={true} />
        </div>
      </div>
    </div>
  );
};

const TrustItem = ({ img, title, isLast }) => {
  return (
    <div
      className={`
        flex flex-col items-center lg:items-start text-center lg:text-left
        ${!isLast ? "lg:border-r lg:border-gray-100 lg:pr-8" : ""}
      `}
    >
      <div className="mb-3 flex items-center justify-center lg:justify-start">
        <Images srcImg={img} className="w-10 h-10 object-contain" />
      </div>

      <h4
        className="
          text-Primary
          text-[18px]
          lg:text-[20px]
          font-Inter
          font-bold
          py-0.5
        "
      >
        {title}
      </h4>

      <p
        className="
          text-[#647589]
          text-sm
          font-Nunito
        "
      >
        On all orders over $75.00
      </p>
    </div>
  );
};

export default Banner;