import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

const PreveArrow = ({ onClick }) => {
  return (
    <div
      className="p-6 absolute top-1/2 left-0 z-20 -translate-y-1/2 rounded-full bg-[#80B500] border border-[#80B500] text-white cursor-pointer hover:bg-transparent hover:text-[#80B500] duration-200"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

export default PreveArrow