import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Container from "../common/Container";
import Images from "../common/Images";
import blogOne from "/src/assets/blogCard.png";
import { FaCalendarAlt, FaCommentDots } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import clitent from "/src/assets/blogpageClient.png";
import star from "/src/assets/productsStat.png";
import stardark from "/src/assets/productStardrak.png";

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
        <div className="mt-[120px] mb-[300px]  ">
          <div className="flex gap-x-10">
            <div className="space-y-[180px]">
              {/* Blog Card One */}
              <div className="relative w-[770px]">
                <Images srcImg={blogOne} />
                <div className="p-[36px] bg-white w-[727px]  shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] absolute left-1/2 -bottom-1/2 -translate-1/2">
                  <div className="flex gap-x-[17px]">
                    <p className="flex gap-x-1  text-[#647589] text-base font-bold font-Nunito">
                      <FaCalendarAlt className="text-[#80B500]" /> July 27, 2020
                    </p>
                    <p className="flex gap-x-1 items-center text-[#647589] text-base font-bold font-Nunito">
                      <FaCommentDots className="text-[#80B500]" /> 1 Comments
                    </p>
                  </div>
                  <h4 className="text-Primary text-[26px] font-Inter font-bold w-[468px] leading-[31px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since
                  </h4>
                  <p className="text-[#5C727D] text-base font-Nunito w-[540px] leading-[22px] mt-5">
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
                <div className="p-[36px] bg-white w-[727px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] absolute left-[50%] -bottom-[50%] -translate-[50%]">
                  <div className="flex gap-x-[17px]">
                    <p className="flex gap-x-1  text-[#647589] text-base font-bold font-Nunito">
                      <FaCalendarAlt className="text-[#80B500]" /> July 27, 2020
                    </p>
                    <p className="flex gap-x-1 items-center text-[#647589] text-base font-bold font-Nunito">
                      <FaCommentDots className="text-[#80B500]" /> 1 Comments
                    </p>
                  </div>
                  <h4 className="text-Primary text-[26px] font-Inter font-bold w-[468px] leading-[31px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since
                  </h4>
                  <p className="text-[#5C727D] text-base font-Nunito w-[540px] leading-[22px] mt-5">
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
              <div className="py-[27px] text-center px-[55px] bg-white shadow-[0_0_36px_0_rgba(42,50,168,0.071)]">
                <Images className={"mx-auto"} srcImg={clitent} />
                <h4 className="text-Primary text-xl font-Inter font-bold mt-[19px]">
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
                <p className="text-[#5C727D] text-sm font-Nunito leading-[19px] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
