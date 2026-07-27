import React from "react";
import bnrLogo from "/src/assets/bannerLogo.png";
import { MdArrowRightAlt } from "react-icons/md";

import banner from "/src/assets/banner.png";
import trustOne from "/src/assets/trustOne.png";
import trustTwo from "/src/assets/trustTwo.png";
import trustThree from "/src/assets/trustThree.png";
import trustFour from "/src/assets/trustFour.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Images from "../common/Images";
import Container from "../common/Container";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: "slick-dots slider",
  };

  const bannerContent = (
    <Container>
      <div
        className="
      flex
      flex-col
      lg:flex-row
      items-center
      lg:items-start
      justify-between
      py-16
      sm:py-20
      lg:py-40
      "
      >
        {/* Content */}

        <div
          className="
        mt-5
        lg:mt-10
        text-center
        lg:text-left
        w-full
        lg:w-auto
        "
        >
          <div
            className="
          flex
          justify-center
          lg:justify-start
          items-center
          gap-x-2
          "
          >
            <Images srcImg={bnrLogo} />

            <h4
              className="
            text-Primary
            text-sm
            lg:text-[18px]
            font-Nunito
            "
            >
              100% genuine Products
            </h4>
          </div>

          <h1
            className="
          text-3xl
          sm:text-5xl
          lg:text-7xl
          text-Primary
          font-Inter
          font-bold
          leading-snug
          lg:leading-20
          mt-4
          lg:mt-10
          max-w-[650px]
          mx-auto
          lg:mx-0
          "
          >
            Tasty & Healthy organic Food
          </h1>

          <button
            className="
          mt-6
          lg:mt-10

          mx-auto
          lg:mx-0

          flex
          items-center
          gap-x-1

          py-3
          sm:py-4
          px-6
          sm:px-8

          rounded-full

          bg-[#80B500]

          text-white

          text-sm
          sm:text-base

          font-Nunito

          cursor-pointer
          "
          >
            Explore Products
            <MdArrowRightAlt className="text-2xl sm:text-3xl" />
          </button>
        </div>

        {/* Image */}

        <div
          className="
        mt-8
        sm:mt-12
        lg:-mt-30
        w-full
        flex
        justify-center
        lg:block
        "
        >
          <Images
            srcImg={banner}
            className="
          w-[240px]
          sm:w-[380px]
          lg:w-auto
          object-contain
          "
          />
        </div>
      </div>
    </Container>
  );

  return (
    <div>
      <Slider {...settings} className="overflow-hidden">
        <div className="bg-[#F9F4EE]">{bannerContent}</div>

        <div className="bg-[#F9F4EE]">{bannerContent}</div>

        <div className="bg-[#F9F4EE]">{bannerContent}</div>

        <div className="bg-[#F9F4EE]">{bannerContent}</div>
      </Slider>

      {/* Trust Section */}

      <div
        className="
      relative
      -mt-6
      sm:-mt-10
      lg:-mt-20
      z-20
      px-4
      sm:px-6
      lg:px-0
      "
      >
        <Container>
          <div
            className="
          bg-white
          shadow-lg

          p-5
          lg:p-8

          grid
          grid-cols-1
          sm:grid-cols-2

          lg:flex
          lg:justify-between

          gap-y-6
          lg:gap-y-0
          gap-x-6
          "
          >
            <TrustItem img={trustOne} title="Curated Products" />

            <TrustItem img={trustTwo} title="Handmade" />

            <TrustItem img={trustThree} title="100% Natural" />

            <TrustItem img={trustFour} title="Shipping" />
          </div>
        </Container>
      </div>
    </div>
  );
};

const TrustItem = ({ img, title }) => {
  return (
    <div
      className="
lg:border-r
lg:border-[#707070]

lg:pr-10
last:border-none
"
    >
      <Images srcImg={img} />

      <h4
        className="
text-Primary
text-lg
lg:text-[22px]

font-Inter
font-bold

py-1
"
      >
        {title}
      </h4>

      <p
        className="
text-[#647589]

text-sm
lg:text-base

font-Nunito

"
      >
        On all orders over $75.00
      </p>
    </div>
  );
};

export default Banner;
