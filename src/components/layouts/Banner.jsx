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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: "slick-dots slider",
  };
  return (
    <div className="">
      <Slider {...settings} className="overflow-hidden">
        <div className="bg-[#F9F4EE]">
          <Container>
            <div className="flex py-40">
              <div className="mt-10">
                <div className="flex items-center gap-x-2">
                  <Images srcImg={bnrLogo} />
                  <h4 className="text-Primary text-[18px] font-Nunito">
                    100% genuine Products
                  </h4>
                </div>
                <h1 className="text-7xl text-Primary font-Inter font-bold leading-20 mt-10">
                  Tasty & Healthy organic Food
                </h1>
                <div className="mt-10">
                  <button
                    className={`flex items-center gap-x-1 py-4 px-8 rounded-4xl cursor-pointer bg-[#80B500] text-white text-base font-Nunito`}
                  >
                    Explore Products
                    <MdArrowRightAlt className="text-3xl" />
                  </button>
                </div>
              </div>
              <div className="-mt-30">
                <Images srcImg={banner} />
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-[#F9F4EE]">
          <Container>
            <div className="flex py-40">
              <div className="mt-10">
                <div className="flex items-center gap-x-2">
                  <Images srcImg={bnrLogo} />
                  <h4 className="text-Primary text-[18px] font-Nunito">
                    100% genuine Products
                  </h4>
                </div>
                <h1 className="text-7xl text-Primary font-Inter font-bold leading-20 mt-10">
                  Tasty & Healthy organic Food
                </h1>
                <div className="mt-10">
                  <button
                    className={`flex items-center gap-x-1 py-4 px-8 rounded-4xl cursor-pointer bg-[#80B500] text-white text-base font-Nunito`}
                  >
                    Explore Products
                    <MdArrowRightAlt className="text-3xl" />
                  </button>
                </div>
              </div>
              <div className="-mt-30">
                <Images srcImg={banner} />
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-[#F9F4EE]">
          <Container>
            <div className="flex py-40">
              <div className="mt-10">
                <div className="flex items-center gap-x-2">
                  <Images srcImg={bnrLogo} />
                  <h4 className="text-Primary text-[18px] font-Nunito">
                    100% genuine Products
                  </h4>
                </div>
                <h1 className="text-7xl text-Primary font-Inter font-bold leading-20 mt-10">
                  Tasty & Healthy organic Food
                </h1>
                <div className="mt-10">
                  <button
                    className={`flex items-center gap-x-1 py-4 px-8 rounded-4xl cursor-pointer bg-[#80B500] text-white text-base font-Nunito`}
                  >
                    Explore Products
                    <MdArrowRightAlt className="text-3xl" />
                  </button>
                </div>
              </div>
              <div className="-mt-30">
                <Images srcImg={banner} />
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-[#F9F4EE]">
          <Container>
            <div className="flex py-40">
              <div className="mt-10">
                <div className="flex items-center gap-x-2">
                  <Images srcImg={bnrLogo} />
                  <h4 className="text-Primary text-[18px] font-Nunito">
                    100% genuine Products
                  </h4>
                </div>
                <h1 className="text-7xl text-Primary font-Inter font-bold leading-20 mt-10">
                  Tasty & Healthy organic Food
                </h1>
                <div className="mt-10">
                  <button
                    className={`flex items-center gap-x-1 py-4 px-8 rounded-4xl cursor-pointer bg-[#80B500] text-white text-base font-Nunito`}
                  >
                    Explore Products
                    <MdArrowRightAlt className="text-3xl" />
                  </button>
                </div>
              </div>
              <div className="-mt-30">
                <Images srcImg={banner} />
              </div>
            </div>
          </Container>
        </div>
      </Slider>
      <div className="relative -mt-20 z-20 ">
        <Container>
          <div className="flex justify-between bg-white shadow-lg p-8">
            <div className="border-r border-[#707070] pr-10">
              <Images srcImg={trustOne} />
              <h4 className="text-Primary text-[22px] font-Inter font-bold py-1">
                Curated Products
              </h4>
              <p className="text-[#647589] text-base font-Nunito">
                On all orders over $75.00
              </p>
            </div>
            <div className="border-r border-[#707070] pr-10">
              <Images srcImg={trustTwo} />
              <h4 className="text-Primary text-[22px] font-Inter font-bold py-1">
                Handmade
              </h4>
              <p className="text-[#647589] text-base font-Nunito">
                On all orders over $75.00
              </p>
            </div>
            <div className="border-r border-[#707070] pr-10">
              <Images srcImg={trustThree} />
              <h4 className="text-Primary text-[22px] font-Inter font-bold py-1">
                100% Natural
              </h4>
              <p className="text-[#647589] text-base font-Nunito">
                On all orders over $75.00
              </p>
            </div>
            <div className="">
              <Images srcImg={trustFour} />
              <h4 className="text-Primary text-[22px] font-Inter font-bold py-1">
                Shipping
              </h4>
              <p className="text-[#647589] text-base font-Nunito">
                On all orders over $75.00
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
