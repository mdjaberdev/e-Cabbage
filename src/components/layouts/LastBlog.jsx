import React from 'react'
import blogOne from '/src/assets/lastBlogOne.png'
import { IoIosEye } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import Container from '../common/Container';
import Images from '../common/Images';

const LastBlog = () => {
  return (
    <div className="my-20 ">
      <Container>
        <div className="text-center">
          <h3 className="text-Primary text-5xl font-bold font-Inter ">
            Leatest Blog
          </h3>
          <p className="text-[#546375] text-base font-Rubik mt-4">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>
        <div className="flex gap-x-10 justify-center mt-10">
          <div className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-3 w-1/3">
            <Images srcImg={blogOne} className={"mx-auto"} />
            <div className="flex items-center gap-x-8 mt-5">
              <div className="flex gap-x-1">
                <IoIosEye className="text-[#80B500]" />
                <h5 className="text-[#647589] text-sm font-Nunito">
                  238 Views
                </h5>
              </div>
              <div className="flex gap-x-1">
                <FaCalendarAlt className="text-[#80B500]" />
                <h5 className="text-[#647589] text-sm font-Nunito">
                  July 27, 2020
                </h5>
              </div>
            </div>
            <h3 className="text-Primary text-[24px] font-Inter font-bold py-5 hover:text-[#80B500] duration-200">
              Pure is the most healthy and most nourishing food
            </h3>
            <p className="text-[#647589] text-sm font-Nunito leading-5 w-[307px]">
              Owt to do with me cracking goal arse over tit cup of tea brolly in
              my flat victoria sponge cup of
            </p>
            <div className="text-Primary text-base font-bold font-Nunito flex items-center gap-x-1 mt-4 hover:text-[#80B500] duration-200">
              Read More <FaCircleChevronRight />
            </div>
          </div>
          <div className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-3 w-1/3">
            <Images srcImg={blogOne} className={"mx-auto"} />
            <div className="flex items-center gap-x-8 mt-5">
              <div className="flex gap-x-1">
                <IoIosEye className="text-[#80B500]" />
                <h5 className="text-[#647589] text-sm font-Nunito">
                  238 Views
                </h5>
              </div>
              <div className="flex gap-x-1">
                <FaCalendarAlt className="text-[#80B500]" />
                <h5 className="text-[#647589] text-sm font-Nunito">
                  July 27, 2020
                </h5>
              </div>
            </div>
            <h3 className="text-Primary text-[24px] font-Inter font-bold py-5 hover:text-[#80B500] duration-200">
              Pure is the most healthy and most nourishing food
            </h3>
            <p className="text-[#647589] text-sm font-Nunito leading-5 w-[307px]">
              Owt to do with me cracking goal arse over tit cup of tea brolly in
              my flat victoria sponge cup of
            </p>

            <div className="text-Primary text-base font-bold font-Nunito flex items-center gap-x-1 mt-4 hover:text-[#80B500] duration-200">
              Read More <FaCircleChevronRight />
            </div>
          </div>
          <div className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-3 w-1/3">
            <Images srcImg={blogOne} className={"mx-auto"} />
            <div className="flex items-center gap-x-8 mt-5">
              <div className="flex gap-x-1">
                <IoIosEye className="text-[#80B500]" />
                <h5 className="text-[#647589] text-sm font-Nunito">
                  238 Views
                </h5>
              </div>
              <div className="flex gap-x-1">
                <FaCalendarAlt className="text-[#80B500]" />
                <h5 className="text-[#647589] text-sm font-Nunito">
                  July 27, 2020
                </h5>
              </div>
            </div>
            <h3 className="text-Primary text-[24px] font-Inter font-bold py-5 hover:text-[#80B500] duration-200">
              Pure is the most healthy and most nourishing food
            </h3>
            <p className="text-[#647589] text-sm font-Nunito leading-5 w-[307px]">
              Owt to do with me cracking goal arse over tit cup of tea brolly in
              my flat victoria sponge cup of
            </p>
            <div className="text-Primary text-base font-bold font-Nunito flex items-center gap-x-1 mt-4 hover:text-[#80B500] duration-200">
              Read More <FaCircleChevronRight />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LastBlog