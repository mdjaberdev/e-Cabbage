import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const NextArrow = ({onClick}) => {
  return (
    <div className="p-6 absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-[#80B500] border border-[#80B500] text-white cursor-pointer hover:bg-transparent hover:text-[#80B500] duration-200" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

export default NextArrow;
