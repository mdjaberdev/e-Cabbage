import { useState } from "react";
import Container from "../common/Container";
import { FaAngleRight } from "react-icons/fa";
import Images from "../common/Images";
import order from "../../assets/Order.png";
import Button from "../common/Button";

const Cart = () => {
  let [count, setcount] = useState(0);
  const handleMinus = () => {
    if (count > 0) {
      setcount((count) => count - 1);
    }
  };
  const handlePlus = () => {
    if (count < 10) {
      setcount((count) => count + 1);
    }
  };

  return (
    <section>
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-37.5">
        <Container>
          <div className="">
            <h3 className="text-Primary text-[55px] font-bold font-Inter">
              Cart Page
            </h3>
            <h5 className="text-[#133344] text-[18px] font-Nunito flex items-center">
              Home <FaAngleRight /> Cart
            </h5>
          </div>
        </Container>
      </div>
      <div className="my-[115px] ">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between gap-10 p-5">
            {/* Left Side: Product List */}
            <div className="w-full lg:w-[900px]">
              {/* Table Header */}
              <div className="grid grid-cols-4 pb-4 mb-5">
                <h4 className="text-Primary text-[20px] font-bold font-Inter">
                  Product
                </h4>
                <h4 className="text-Primary text-[20px] font-bold font-Inter text-center">
                  Price
                </h4>
                <h4 className="text-Primary text-[20px] font-bold font-Inter text-center">
                  Quantity
                </h4>
                <h4 className="text-Primary text-[20px] font-bold font-Inter text-right">
                  Total
                </h4>
              </div>

              {/* Product Row */}
              <div className="grid grid-cols-4 items-center py-4 border-bottom">
                {/* 1. Product Info */}
                <div className="flex items-center gap-x-4">
                  <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
                    <Images srcImg={order} />
                  </div>
                  <div>
                    <p className="text-Primary text-sm font-bold font-Inter">
                      Potato Chips Brown
                    </p>
                    <p className="text-[#666E77] text-[12px]">Color: Brown</p>
                    <p className="text-[#666E77] text-[12px]">Weight: 2kg</p>
                  </div>
                </div>

                {/* 2. Price */}
                <p className="text-Primary text-sm font-Inter text-center">
                  $32.00
                </p>

                {/* 3. Quantity Controls */}
                <div className="flex justify-center">
                  <div className="bg-[#F2F2F7] w-[100px] py-2 px-3 flex justify-between items-center rounded">
                    <button
                      onClick={handleMinus}
                      className="cursor-pointer hover:text-red-500"
                    >
                      -
                    </button>
                    <span className="font-bold">{count}</span>
                    <button
                      onClick={handlePlus}
                      className="cursor-pointer hover:text-green-500"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* 4. Total */}
                <p className="text-Primary text-sm font-bold font-Inter text-right">
                  £219.00
                </p>
              </div>
            </div>

            {/* Right Side: Cart Totals */}
            <div className="w-full lg:w-[300px]">
              <h4 className="text-Primary text-[22px] font-bold font-Inter text-center ">
                Cart Totals
              </h4>
              <div className="bg-[#E5E4F8] p-8 rounded-lg shadow-sm mt-10">
                <div className="flex justify-between border-b border-[#BFC1C7] pb-3">
                  <p className="text-[#666E77] text-[12px]">
                    Subtotals:£381.00
                  </p>
                </div>
                <div className="flex justify-between border-b border-[#BFC1C7] my-7.5 pb-3">
                  <p className="text-[#666E77] text-[12px]">Totals:£381.00</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <input type="checkbox" />
                  <span className="text-[#666E77] text-[10px] font-Nunito">
                    Shipping & taxes calculated at checkout
                  </span>
                </div>
                <Button
                  btnTxt={"Procced To Cheackout"}
                  className={"text-sm mt-7.5"}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Cart;
