import React from "react";
import {
  FaAngleRight,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaVimeoV,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";
import Container from "../common/Container";
import Images from "../common/Images";
import blogOne from "/src/assets/blogCard.png";
import { FaCalendarAlt, FaCommentDots } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import clitent from "/src/assets/blogpageClient.png";
import star from "/src/assets/productsStat.png";
import stardark from "/src/assets/productStardrak.png";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const Blog = () => {
  return (
    <section>
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-37.5">
        <Container>
          <div className="">
            <h3 className="text-Primary text-[55px] font-bold font-Inter">
              Blog Page
            </h3>
            <h5 className="text-[#133344] text-[18px] font-Nunito flex items-center">
              Home <FaAngleRight /> Blog
            </h5>
          </div>
        </Container>
      </div>

      <Container>
        <div className="mt-30 mb-75  ">
          <div className="flex gap-x-10">
            <div className="space-y-45">
              {/* Blog Card One */}
              <div className="relative w-192.5">
                <Images srcImg={blogOne} />
                <div className="p-9 bg-white w-181.75  shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] absolute left-1/2 -bottom-1/2 -translate-1/2">
                  <div className="flex gap-x-4.25">
                    <p className="flex gap-x-1  text-[#647589] text-base font-bold font-Nunito">
                      <FaCalendarAlt className="text-[#80B500]" /> July 27, 2020
                    </p>
                    <p className="flex gap-x-1 items-center text-[#647589] text-base font-bold font-Nunito">
                      <FaCommentDots className="text-[#80B500]" /> 1 Comments
                    </p>
                  </div>
                  <h4 className="text-Primary text-[26px] font-Inter font-bold w-117 leading-7.75">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since
                  </h4>
                  <p className="text-[#5C727D] text-base font-Nunito w-135 leading-5.5 mt-5">
                    It is a long established fact that a reader will be
                    distracted by the readable looking at its layout. The point
                    of using Lorem Ipsum is that{" "}
                  </p>

                  <div className="text-[#80B500] text-base font-bold font-Nunito flex items-center gap-x-1 mt-4">
                    Read More <FaCircleChevronRight />
                  </div>
                </div>
              </div>
              {/* Blog Card One */}
              <div className="relative">
                <Images srcImg={blogOne} />
                <div className="p-9 bg-white w-181.75 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] absolute left-[50%] -bottom-[50%] -translate-[50%]">
                  <div className="flex gap-x-4.25">
                    <p className="flex gap-x-1  text-[#647589] text-base font-bold font-Nunito">
                      <FaCalendarAlt className="text-[#80B500]" /> July 27, 2020
                    </p>
                    <p className="flex gap-x-1 items-center text-[#647589] text-base font-bold font-Nunito">
                      <FaCommentDots className="text-[#80B500]" /> 1 Comments
                    </p>
                  </div>
                  <h4 className="text-Primary text-[26px] font-Inter font-bold w-117 leading-7.75">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since
                  </h4>
                  <p className="text-[#5C727D] text-base font-Nunito w-135 leading-5.5 mt-5">
                    It is a long established fact that a reader will be
                    distracted by the readable looking at its layout. The point
                    of using Lorem Ipsum is that{" "}
                  </p>

                  <div className="text-[#80B500] text-base font-bold font-Nunito flex items-center gap-x-1 mt-4">
                    Read More <FaCircleChevronRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="py-6.75 text-center px-13.75 bg-white shadow-[0_0_36px_0_rgba(42,50,168,0.071)]">
                <Images className={"mx-auto"} srcImg={clitent} />
                <h4 className="text-Primary text-xl font-Inter font-bold mt-4.75">
                  Jehnny Rose
                </h4>
                <p className="text-[#5C727D] text-[12px] font-Nunito">
                  Traveller/Photographer
                </p>
                <div className="flex justify-center">
                  <div className="">
                    <Images srcImg={star} />
                  </div>
                  <div className="">
                    <Images srcImg={star} />
                  </div>
                  <div className="">
                    <Images srcImg={star} />
                  </div>
                  <div className="">
                    <Images srcImg={star} />
                  </div>
                  <div className="">
                    <Images srcImg={stardark} />
                  </div>
                  <p className="text-[#5C727D] text-[9px] font-Nunito">
                    (1 Review)
                  </p>
                </div>
                <p className="text-[#5C727D] text-sm font-Nunito leading-4.75 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <div className="flex justify-center gap-x-2 mt-6">
                  <div className="p-3 bg-white text-[#6A7695] rounded-full hover:bg-[#80B500] hover:text-white duration-200">
                    <Link>
                      <FaFacebookF />
                    </Link>
                  </div>
                  <div className="p-3 bg-white text-[#6A7695] rounded-full hover:bg-[#80B500] hover:text-white duration-200">
                    <Link>
                      <FaTwitter />
                    </Link>
                  </div>
                  <div className="p-3 bg-white text-[#6A7695] rounded-full hover:bg-[#80B500] hover:text-white duration-200">
                    <Link>
                      <FaInstagram />
                    </Link>
                  </div>
                  <div className="p-3 bg-white text-[#6A7695] rounded-full hover:bg-[#80B500] hover:text-white duration-200">
                    <Link>
                      <FaGooglePlusG />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="py-9.75 px-5.25 bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] my-7.5 ">
                <h4 className="text-Primary text-xl font-Inter font-bold border-b border-[#BDBDD8]">
                  Serarch
                </h4>
                <div className=" mt-6 p-3 relative border border-[#BDBDD8] ">
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-0 text-sm text-[#797D95] font-Nunito h-7.5 w-49"
                  />
                  <div className="bg-[#80B500] h-full border border-[#80B500]  w-17.5 flex justify-center items-center absolute top-0 right-0">
                    <IoSearchOutline className=" text-white w-10   " />
                  </div>
                </div>
              </div>
              <div className="py-9.75 px-5.25 bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <h4 className="text-Primary text-xl font-Inter font-bold border-b border-[#BDBDD8]">
                  Catagories
                </h4>
                <div className="">
                  <div className="text-[#80B500] text-sm font-Nunito py-[9px] px-[19px] bg-[#e9eae4] mt-[27px] hover:text-white hover:bg-[#80B500] duration-200">
                    Vegetables items (14)
                  </div>
                  <div className="text-[#80B500] text-sm font-Nunito py-[9px] px-[19px] bg-[#e9eae4] my-[18px] hover:text-white hover:bg-[#80B500] duration-200">
                    Herbel Medicine (21)
                  </div>
                  <div className="text-[#80B500] text-sm font-Nunito py-[9px] px-[19px] bg-[#e9eae4] my-[18px] hover:text-white hover:bg-[#80B500] duration-200">
                    Olive Oil massage (17)
                  </div>
                  <div className="text-[#80B500] text-sm font-Nunito py-[9px] px-[19px] bg-[#e9eae4] my-[18px] hover:text-white hover:bg-[#80B500] duration-200">
                    Organic Foods (09)
                  </div>
                  <div className="text-[#80B500] text-sm font-Nunito py-[9px] px-[19px] bg-[#e9eae4] mt-[18px] hover:text-white hover:bg-[#80B500] duration-200">
                    Fishes & meats (265)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
