import React from "react";
import { FaCircleChevronRight, FaRegHeart } from "react-icons/fa6";
import trendingImg from "/src/assets/trendingBgImg.png";
import tpOne from "/src/assets/trendingProductsOne.png";
import star from "/src/assets/productsStat.png";
import stardark from "/src/assets/productStardrak.png";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineZoomIn } from "react-icons/ai";
import Container from "../common/Container";
import Images from "../common/Images";
import Badge from "../common/Badge";

const TrendingProducts = () => {
  return (
    <div className="my-30">
      <Container>
        <div className="text-center">
          <h3 className="text-Primary text-5xl font-bold font-Inter ">
            Trending Products
          </h3>
          <p className="text-[#546375] text-base font-Rubik mt-4">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>
        <div className="flex gap-x-5 justify-center mt-10">
          <div className="bg-[#F5F5F5] p-6 h-[233px] w-1/4">
            <h4 className="text-[#80B500] text-[10px] font-bold font-Nunito">
              FRUITS & ORGANIC
            </h4>
            <h3 className="text-Primary text-[18px] font-bold font-Inter w-[143px] leading-5 py-2">
              50% off in Fresh Mango Drinks
            </h3>
            <button className="flex items-center gap-x-1 text-[#80B500] text-[13px] font-bold font-Nunito mt-3">
              Buy Now <FaCircleChevronRight />
            </button>
          </div>
          <div className="bg-white border border-[#A6A6C7] relative group p-2">
            <Images srcImg={tpOne} />
            <div className="">
              <h4 className="text-[#647589] text-[11px] font-Rubik mt-2">
                Health & protins
              </h4>
              <h3 className="text-Primary text-base font-Inter py-2">
                Orange & Tomato
              </h3>
              <div className="flex items-center gap-x-3">
                <h4 className="text-[#283C54] text-sm font-Nunito">$32.00</h4>
                <div className="flex items-center gap-x-0.5">
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={stardark} className={"w-[13px] h-[13px]"} />
                </div>
              </div>
            </div>
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
          </div>
          <div className="bg-white border border-[#A6A6C7] relative group p-2">
            <Images srcImg={tpOne} />
            <div className="">
              <h4 className="text-[#647589] text-[11px] font-Rubik mt-2">
                Health & protins
              </h4>
              <h3 className="text-Primary text-base font-Inter py-2">
                Medical Blue Suit
              </h3>
              <div className="flex items-center gap-x-3">
                <h4 className="text-[#283C54] text-sm font-Nunito">$32.00</h4>
                <div className="flex items-center gap-x-0.5">
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={stardark} className={"w-[13px] h-[13px]"} />
                </div>
              </div>
            </div>
            <Badge
              className={"-mr-1 top-5 rounded-tl-[10px] rounded-br-[10px]"}
              badgeTxt={"-29%"}
            />
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
          </div>
          <div className="bg-white border border-[#A6A6C7] relative group p-2">
            <Images srcImg={tpOne} />
            <div className="">
              <h4 className="text-[#647589] text-[11px] font-Rubik mt-2">
                Health & protins
              </h4>
              <h3 className="text-Primary text-base font-Inter py-2">
                Guava Fruits Juice
              </h3>
              <div className="flex items-center gap-x-3">
                <h4 className="text-[#283C54] text-sm font-Nunito">$32.00</h4>
                <div className="flex items-center gap-x-0.5">
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={stardark} className={"w-[13px] h-[13px]"} />
                </div>
              </div>
            </div>
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
          </div>
        </div>
        <div className="flex items-center gap-x-5 justify-center ">
          <div className="relative w-1/4">
            <Images srcImg={trendingImg} />
            <div className="absolute top-0 left-5 p-6 ">
              <h4 className="text-[#80B500] text-[10px] font-bold font-Nunito">
                - 29% OFF
              </h4>
              <h3 className="text-Primary text-[18px] font-bold font-Inter w-[143px] leading-5 py-2">
                Green lemon & Orange Juice
              </h3>
              <button className="flex items-center gap-x-1 text-[#80B500] text-[13px] font-bold font-Nunito mt-3">
                Buy Now <FaCircleChevronRight />
              </button>
            </div>
          </div>
          <div className="bg-white border relative group border-[#A6A6C7] p-2">
            <Images srcImg={tpOne} />
            <div className="">
              <h4 className="text-[#647589] text-[11px] font-Rubik mt-2">
                Health & protins
              </h4>
              <h3 className="text-Primary text-base font-Inter py-2">
                Banana Fruits Cril
              </h3>
              <div className="flex items-center gap-x-3">
                <h4 className="text-[#283C54] text-sm font-Nunito">$32.00</h4>
                <div className="flex items-center gap-x-0.5">
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={stardark} className={"w-[13px] h-[13px]"} />
                </div>
              </div>
            </div>
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
          </div>
          <div className="bg-white border border-[#A6A6C7] relative group p-2">
            <Images srcImg={tpOne} />
            <div className="">
              <h4 className="text-[#647589] text-[11px] font-Rubik mt-2">
                Health & protins
              </h4>
              <h3 className="text-Primary text-base font-Inter py-2">
                Fresh papya Piece
              </h3>
              <div className="flex items-center gap-x-3">
                <h4 className="text-[#283C54] text-sm font-Nunito">$32.00</h4>
                <div className="flex items-center gap-x-0.5">
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={stardark} className={"w-[13px] h-[13px]"} />
                </div>
              </div>
            </div>
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
          </div>
          <div className="bg-white border border-[#A6A6C7] rounded group relative p-2">
            <Images srcImg={tpOne} />
            <div className="">
              <h4 className="text-[#647589] text-[11px] font-Rubik mt-2">
                Health & protins
              </h4>
              <h3 className="text-Primary text-base font-Inter py-2">
                Tasty Strawberry
              </h3>
              <div className="flex items-center gap-x-3">
                <h4 className="text-[#283C54] text-sm font-Nunito">$32.00</h4>
                <div className="flex items-center gap-x-0.5">
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={star} className={"w-[13px] h-[13px]"} />
                  <Images srcImg={stardark} className={"w-[13px] h-[13px]"} />
                </div>
              </div>
            </div>
            <Badge
              className={"-mr-1 top-5 rounded-tl-[10px] rounded-br-[10px]"}
              badgeTxt={"-29%"}
            />
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrendingProducts;
