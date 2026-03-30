import React from "react";
import Container from "../common/Container";
import { FaAngleRight, FaThList } from "react-icons/fa";
import { IoGridSharp, IoSearchOutline } from "react-icons/io5";
import Products from "../common/Products";
import productImg from "/src/assets/products.png";
import Badge from "../common/Badge";
import Pagination from "../common/Pagination";

const Shop = () => {
  return (
    <div className="">
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-[150px]">
        <Container>
          <div className="">
            <h3 className="text-Primary text-[55px] font-bold font-Inter">
              Shop
            </h3>
            <h5 className="text-[#133344] text-[18px] font-Nunito flex items-center">
              Home <FaAngleRight /> Shop
            </h5>
          </div>
        </Container>
      </div>
      <Container>
        <div className="mt-[113px]">
          <div className="flex items-center justify-between py-5">
            <div className="">
              <h4 className="text-Primary text-[25px] font-bold font-Inter">
                Organic Fresh Food Fresh Juices
              </h4>
              <p className="text-[#666E77] text-[15px] font-Nunito">
                About 9,620 results (0.62 seconds)
              </p>
            </div>
            <div className="flex gap-x-1 ml-10">
              <h4 className="text-[#0A2C3D] text-base">Per Page:</h4>
              <div className="py-1 px-2 h-7 border border-[#9C9FB7] text-[#9C9FB7] text-[12px] font-Nunito">
                <select className="outline-0">
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                </select>
              </div>
            </div>
            <div className="flex gap-x-1">
              <h4 className="text-[#0A2C3D] text-base">Sort By:</h4>
              <div className="py-1 px-2 h-7 border border-[#9C9FB7] text-[#9C9FB7] text-[12px] font-Nunito">
                <select className="outline-0">
                  <option value="">Best Match</option>
                  <option value="">Best Match</option>
                  <option value="">Best Match</option>
                </select>
              </div>
            </div>
            <div className="p-2 flex items-center justify-center h-7 shadow">
              <IoGridSharp />
            </div>
            <div className="p-2 flex items-center justify-center h-7 shadow">
              <FaThList />
            </div>

            <div className="  relative  pl-3 bg-[#F4F4F4] rounded-md">
              <input
                type="text"
                placeholder="Search"
                className="outline-0 text-sm text-[#797D95] font-Nunito h-7.5 w-[196px]"
              />
              <div className="bg-[#80B500] h-7.5 py-2 absolute top-0 right-0">
                <IoSearchOutline className=" text-white w-10   " />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-5 mt-10">
          <Products
            productImg={productImg}
            productTitle={"Juicy Orange Pack"}
            productReview={"(24)"}
            productPrice={"$19.00"}
          />
          <Products
            productImg={productImg}
            productTitle={"Juicy Orange Pack"}
            productReview={"(24)"}
            productPrice={"$19.00"}
          />
          <div className="relative">
            <Products
              productImg={productImg}
              productTitle={"Juicy Orange Pack"}
              productReview={"(24)"}
              productPrice={"$19.00"}
            />
            <Badge className={"absolute"} badgeTxt={"-29%"} />
          </div>
          <Products
            productImg={productImg}
            productTitle={"Juicy Orange Pack"}
            productReview={"(24)"}
            productPrice={"$19.00"}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-5 mt-10">
          <Products
            productImg={productImg}
            productTitle={"Juicy Orange Pack"}
            productReview={"(24)"}
            productPrice={"$19.00"}
          />
          <Products
            productImg={productImg}
            productTitle={"Juicy Orange Pack"}
            productReview={"(24)"}
            productPrice={"$19.00"}
          />
          <Products
            productImg={productImg}
            productTitle={"Juicy Orange Pack"}
            productReview={"(24)"}
            productPrice={"$19.00"}
          />
          <Products
            productImg={productImg}
            productTitle={"Juicy Orange Pack"}
            productReview={"(24)"}
            productPrice={"$19.00"}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-5 mt-10 mb-20">
          <Products
            productImg={productImg}
            productTitle={"Juicy Orange Pack"}
            productReview={"(24)"}
            productPrice={"$19.00"}
          />
          <Products
            productImg={productImg}
            productTitle={"Juicy Orange Pack"}
            productReview={"(24)"}
            productPrice={"$19.00"}
          />
          <Products
            productImg={productImg}
            productTitle={"Juicy Orange Pack"}
            productReview={"(24)"}
            productPrice={"$19.00"}
          />
          <Products
            productImg={productImg}
            productTitle={"Juicy Orange Pack"}
            productReview={"(24)"}
            productPrice={"$19.00"}
          />
        </div>
      </Container>
      <div className="mt-16.5 mb-29.75">
        <Pagination itemsPerPage={3} />
      </div>
    </div>
  );
};

export default Shop;
