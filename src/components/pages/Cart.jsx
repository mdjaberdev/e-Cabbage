import React from "react";
import Container from "../common/Container";
import { FaAngleRight } from "react-icons/fa";
import Images from "../common/Images";
import Button from "../common/Button";

import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

  // মোট সাবটোটাল হিসাব করা
  const subtotal = cartItems.reduce((total, item) => {
    const priceNumber =
      parseFloat(item.productPrice.replace(/[^0-9.]/g, "")) || 0;
    return total + priceNumber * item.quantity;
  }, 0);

  return (
    <section>
      {/* Banner Section */}
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-37.5">
        <Container>
          <div>
            <h3 className="text-Primary text-[55px] font-bold font-Inter">
              Cart Page
            </h3>
            <h5 className="text-[#133344] text-[18px] font-Nunito flex items-center">
              <Link to="/">Home</Link> <FaAngleRight /> Cart
            </h5>
          </div>
        </Container>
      </div>

      {/* Cart Content Section */}
      <div className="my-[115px]">
        <Container>
          {cartItems.length === 0 ? (
            /* যদি কার্ট খালি থাকে */
            <div className="text-center py-10">
              <h2 className="text-2xl font-bold font-Inter text-Primary mb-4">
                Your Cart is Empty!
              </h2>
              <p className="text-[#666E77] mb-6">
                You haven't added any products to your cart yet.
              </p>
              <Link to="/">
                <Button btnTxt={"Return to Shop"} className={"text-sm"} />
              </Link>
            </div>
          ) : (
            /* যদি কার্টে প্রোডাক্ট থাকে */
            <div className="flex flex-col lg:flex-row justify-between gap-10 p-5">
              {/* Left Side: Product List */}
              <div className="w-full lg:w-[900px]">
                {/* Table Header */}
                <div className="grid grid-cols-4 pb-4 mb-5 border-b border-[#BFC1C7]">
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

                {/* Dynamic Product Rows */}
                {cartItems.map((item) => {
                  const singlePrice =
                    parseFloat(item.productPrice.replace(/[^0-9.]/g, "")) || 0;
                  const itemTotal = singlePrice * item.quantity;

                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-4 items-center py-4 border-b border-gray-200"
                    >
                      {/* 1. Product Info */}
                      <div className="flex items-center gap-x-4">
                        <div className="w-20 h-20 bg-gray-100 flex items-center justify-center p-2 flex-shrink-0 rounded">
                          <Images
                            srcImg={item.productImg}
                            className="max-h-full object-contain mix-blend-multiply"
                          />
                        </div>
                        <div>
                          <p className="text-Primary text-sm font-bold font-Inter line-clamp-1">
                            {item.productTitle}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 text-xs flex items-center gap-1 mt-1 hover:underline cursor-pointer"
                          >
                            <AiOutlineDelete size={14} /> Remove
                          </button>
                        </div>
                      </div>

                      {/* 2. Price */}
                      <p className="text-Primary text-sm font-Inter text-center">
                        {item.productPrice}
                      </p>

                      {/* 3. Quantity Controls */}
                      <div className="flex justify-center">
                        <div className="bg-[#F2F2F7] w-[100px] py-2 px-3 flex justify-between items-center rounded">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="cursor-pointer hover:text-red-500 font-bold"
                          >
                            -
                          </button>
                          <span className="font-bold">{item.quantity}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="cursor-pointer hover:text-green-500 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* 4. Total */}
                      <p className="text-Primary text-sm font-bold font-Inter text-right">
                        ${itemTotal.toFixed(2)}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Right Side: Cart Totals */}
              <div className="w-full lg:w-[300px]">
                <h4 className="text-Primary text-[22px] font-bold font-Inter text-center">
                  Cart Totals
                </h4>
                <div className="bg-[#E5E4F8] p-8 rounded-lg shadow-sm mt-10">
                  <div className="flex justify-between border-b border-[#BFC1C7] pb-3">
                    <p className="text-[#666E77] text-sm font-semibold">
                      Subtotal: ${subtotal.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex justify-between border-b border-[#BFC1C7] my-7.5 pb-3">
                    <p className="text-[#666E77] text-sm font-semibold">
                      Total: ${subtotal.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input type="checkbox" id="shippingCheck" />
                    <label
                      htmlFor="shippingCheck"
                      className="text-[#666E77] text-[10px] font-Nunito cursor-pointer"
                    >
                      Shipping & taxes calculated at checkout
                    </label>
                  </div>
                  <Link to="/checkout">
                    <Button
                      btnTxt={"Proceed To Checkout"}
                      className={
                        "text-sm mt-7.5 w-full text-center flex justify-center"
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </section>
  );
};

export default Cart;
