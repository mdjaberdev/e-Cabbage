import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const PreveArrowTwo = ({ onClick }) => {
  return (
    <div
      className="p-6 absolute top-1/2 -left-[80px] z-20 rounded-full bg-[#80B500] border border-[#80B500] text-white cursor-pointer hover:bg-transparent hover:text-[#80B500] duration-200"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

export default PreveArrowTwo
