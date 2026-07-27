import React from "react";
import blogOne from "/src/assets/blogSectionImgOne.png";
import blogTwo from "/src/assets/blogSectionImgTwo.png";
import blogThree from "/src/assets/blogSectionImgThree.png";
import { IoIosEye } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import Container from "../common/Container";
import Images from "../common/Images";

const LastBlog = () => {
  return (
    <div className="my-16 sm:my-20">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <h3 className="text-Primary text-3xl sm:text-4xl lg:text-5xl font-bold font-Inter">
            Leatest Blog
          </h3>

          <p className="text-[#546375] text-sm sm:text-base font-Rubik mt-3 sm:mt-4">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-10 justify-center mt-10">
          {/* Card One */}
          <div className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-3 sm:p-4 w-full lg:w-1/3">
            <Images
              srcImg={blogOne}
              className={"mx-auto h-[200px] sm:h-[220px] w-full object-cover"}
            />

            <div className="flex flex-wrap items-center gap-x-8 mt-4 sm:mt-5">
              <div className="flex gap-x-1 items-center">
                <IoIosEye className="text-[#80B500]" />
                <h5 className="text-[#647589] text-sm font-Nunito">
                  238 Views
                </h5>
              </div>

              <div className="flex gap-x-1 items-center">
                <FaCalendarAlt className="text-[#80B500]" />
                <h5 className="text-[#647589] text-sm font-Nunito">
                  July 27, 2020
                </h5>
              </div>
            </div>

            <h3 className="text-Primary text-xl sm:text-[24px] font-Inter font-bold py-4 sm:py-5 hover:text-[#80B500] duration-200">
              Pure is the most healthy and most nourishing food
            </h3>

            <p className="text-[#647589] text-sm font-Nunito leading-relaxed">
              Owt to do with me cracking goal arse over tit cup of tea brolly in
              my flat victoria sponge cup of
            </p>

            <div className="text-Primary text-base font-bold font-Nunito flex items-center gap-x-1 mt-4 hover:text-[#80B500] duration-200 cursor-pointer">
              Read More
              <FaCircleChevronRight />
            </div>
          </div>

          {/* Card Two */}
          <div className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-3 sm:p-4 w-full lg:w-1/3">
            <Images
              srcImg={blogTwo}
              className={"mx-auto h-[200px] sm:h-[220px] w-full object-cover"}
            />

            <div className="flex flex-wrap items-center gap-x-8 mt-4 sm:mt-5">
              <div className="flex gap-x-1 items-center">
                <IoIosEye className="text-[#80B500]" />
                <h5 className="text-[#647589] text-sm font-Nunito">
                  238 Views
                </h5>
              </div>

              <div className="flex gap-x-1 items-center">
                <FaCalendarAlt className="text-[#80B500]" />
                <h5 className="text-[#647589] text-sm font-Nunito">
                  July 27, 2020
                </h5>
              </div>
            </div>

            <h3 className="text-Primary text-xl sm:text-[24px] font-Inter font-bold py-4 sm:py-5 hover:text-[#80B500] duration-200">
              Pure is the most healthy and most nourishing food
            </h3>

            <p className="text-[#647589] text-sm font-Nunito leading-relaxed">
              Owt to do with me cracking goal arse over tit cup of tea brolly in
              my flat victoria sponge cup of
            </p>

            <div className="text-Primary text-base font-bold font-Nunito flex items-center gap-x-1 mt-4 hover:text-[#80B500] duration-200 cursor-pointer">
              Read More
              <FaCircleChevronRight />
            </div>
          </div>

          {/* Card Three */}
          <div className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-3 sm:p-4 w-full lg:w-1/3">
            <Images
              srcImg={blogThree}
              className={"mx-auto h-[200px] sm:h-[220px] w-full object-cover"}
            />

            <div className="flex flex-wrap items-center gap-x-8 mt-4 sm:mt-5">
              <div className="flex gap-x-1 items-center">
                <IoIosEye className="text-[#80B500]" />
                <h5 className="text-[#647589] text-sm font-Nunito">
                  238 Views
                </h5>
              </div>

              <div className="flex gap-x-1 items-center">
                <FaCalendarAlt className="text-[#80B500]" />
                <h5 className="text-[#647589] text-sm font-Nunito">
                  July 27, 2020
                </h5>
              </div>
            </div>

            <h3 className="text-Primary text-xl sm:text-[24px] font-Inter font-bold py-4 sm:py-5 hover:text-[#80B500] duration-200">
              Pure is the most healthy and most nourishing food
            </h3>

            <p className="text-[#647589] text-sm font-Nunito leading-relaxed">
              Owt to do with me cracking goal arse over tit cup of tea brolly in
              my flat victoria sponge cup of
            </p>

            <div className="text-Primary text-base font-bold font-Nunito flex items-center gap-x-1 mt-4 hover:text-[#80B500] duration-200 cursor-pointer">
              Read More
              <FaCircleChevronRight />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LastBlog;
