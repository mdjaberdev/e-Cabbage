import React from "react";
import Images from "./Images";
import productStar from "/src/assets/productsStat.png";
import productStarDrk from "/src/assets/productStardrak.png";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineZoomIn } from "react-icons/ai";

const Products = ({
  className,
  productPrice,
  productReview,
  productTitle,
  productImg,
}) => {
  return (
    <div className={`text-center relative group ${className}`}>
      <Images srcImg={productImg} className={"w-full"} />
      <div className="opacity-0 group-hover:opacity-100 duration-300 absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-x-2">
        <div className="translate-y-10 group-hover:translate-y-0  p-3 bg-white text-[#80B500] hover:bg-[#80B500] hover:text-white duration-200 rounded-[50%]">
          <LuShoppingCart />
        </div>
        <div className="translate-y-10 group-hover:translate-y-0 delay-100 p-3 bg-white text-[#80B500] hover:bg-[#80B500] hover:text-white duration-200 rounded-[50%]">
          <FaRegHeart />
        </div>
        <div className="translate-y-10 group-hover:translate-y-0 delay-200 p-3 bg-white text-[#80B500] hover:bg-[#80B500] hover:text-white duration-200 rounded-[50%]">
          <AiOutlineZoomIn />
        </div>
      </div>
      <div className="group-hover:shadow-[0_7px_21px_0_rgba(55,55,213,0.14)] py-4 duration-300 w-full">
        <div className="flex gap-x-1 justify-center items-center ">
          <span>
            <Images srcImg={productStar} />
          </span>
          <span>
            {" "}
            <Images srcImg={productStar} />
          </span>
          <span>
            {" "}
            <Images srcImg={productStarDrk} />
          </span>
          <span>
            {" "}
            <Images srcImg={productStarDrk} />
          </span>
          <span>
            {" "}
            <Images srcImg={productStarDrk} />
          </span>
          <p className="text-[#9597AA] text-[10px] font-Nunito">
            {productReview}
          </p>
        </div>
        <h4 className="text-Primary text-base font-bold font-Inter py-2">
          {productTitle}
        </h4>
        <h4 className="text-[#223645] text-sm font-Nunito">{productPrice}</h4>
      </div>
    </div>
  );
};

export default Products;
