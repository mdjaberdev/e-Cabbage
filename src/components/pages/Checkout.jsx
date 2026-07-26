import React, { useState } from "react";
import Container from "../common/Container";
import { FaAngleRight, FaCheckCircle } from "react-icons/fa";
import Button from "../common/Button";

import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const { cartItems, clearCart } = useCart(); 

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    orderNotes: "",
    paymentMethod: "cod",
  });

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const subtotal = cartItems.reduce((total, item) => {
    const priceNumber =
      parseFloat(item.productPrice.replace(/[^0-9.]/g, "")) || 0;
    return total + priceNumber * item.quantity;
  }, 0);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    const orderData = {
      customer: formData,
      items: cartItems,
      totalAmount: subtotal,
      date: new Date().toISOString(),
    };
    console.log("Order Placed Successfully:", orderData);
    setIsOrderPlaced(true);
    if (clearCart) clearCart();
  };

  if (isOrderPlaced) {
    return (
      <Container>
        <div className="py-24 text-center max-w-lg mx-auto">
          <div className="flex justify-center mb-4 text-[#80B500]">
            <FaCheckCircle size={64} />
          </div>
          <h2 className="text-3xl font-bold font-Inter text-Primary mb-3">
            Thank You For Your Order!
          </h2>
          <p className="text-[#666E77] mb-6">
            Your order has been successfully placed. We will contact you soon
            with your Cash on Delivery details.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#80B500] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#6e9c00] transition-colors cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </Container>
    );
  }

  return (
    <section>
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-37.5">
        <Container>
          <div>
            <h3 className="text-Primary text-[55px] font-bold font-Inter">
              Checkout
            </h3>
            <h5 className="text-[#133344] text-[18px] font-Nunito flex items-center">
              <Link to="/">Home</Link> <FaAngleRight /> Checkout
            </h5>
          </div>
        </Container>
      </div>

      {/* Checkout Content */}
      <div className="my-[115px]">
        <Container>
          <form
            onSubmit={handleOrderSubmit}
            className="flex flex-col lg:flex-row justify-between gap-10"
          >
            {/* Left Side: Billing Details Form */}
            <div className="w-full lg:w-[65%] bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-Primary text-[22px] font-bold font-Inter mb-6 border-b pb-3">
                Billing Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#80B500]"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#80B500]"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#80B500]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#80B500]"
                    placeholder="+880 1234 567890"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#80B500]"
                  placeholder="House number and street name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Town / City *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#80B500]"
                  placeholder="Dhaka"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Order Notes (Optional)
                </label>
                <textarea
                  name="orderNotes"
                  rows="3"
                  value={formData.orderNotes}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#80B500]"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                ></textarea>
              </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className="w-full lg:w-[32%]">
              <div className="bg-[#E5E4F8] p-8 rounded-lg shadow-sm">
                <h4 className="text-Primary text-[22px] font-bold font-Inter mb-6 border-b border-[#BFC1C7] pb-3">
                  Your Order
                </h4>

                {/* Products mini list */}
                <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                  {cartItems.map((item) => {
                    const itemPrice =
                      parseFloat(item.productPrice.replace(/[^0-9.]/g, "")) ||
                      0;
                    return (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm text-[#666E77]"
                      >
                        <span className="line-clamp-1 w-2/3 font-medium text-gray-800">
                          {item.productTitle} × {item.quantity}
                        </span>
                        <span className="font-semibold">
                          ${(itemPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between border-t border-[#BFC1C7] pt-4 mb-3">
                  <span className="text-[#666E77] text-sm font-semibold">
                    Subtotal
                  </span>
                  <span className="text-Primary font-bold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#BFC1C7] pb-4 mb-6">
                  <span className="text-[#666E77] text-sm font-semibold">
                    Shipping
                  </span>
                  <span className="text-Primary font-bold">Free</span>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="text-Primary text-lg font-bold">Total</span>
                  <span className="text-[#80B500] text-lg font-bold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                {/* Professional COD Box */}
                <div className="bg-white p-4 rounded-lg mb-6 border border-gray-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      defaultChecked
                      className="mt-1 accent-[#80B500]"
                    />
                    <div>
                      <span className="block text-sm font-bold text-gray-800">
                        Cash on Delivery
                      </span>
                      <span className="block text-xs text-gray-500 mt-0.5">
                        Pay with cash upon delivery at your doorstep.
                      </span>
                    </div>
                  </label>
                </div>

                <Button
                  btnTxt={"Place Order"}
                  className={
                    "text-sm w-full text-center flex justify-center cursor-pointer bg-[#80B500] hover:bg-[#6e9c00] text-white py-3 rounded-lg font-bold transition-colors"
                  }
                />
              </div>
            </div>
          </form>
        </Container>
      </div>
    </section>
  );
};

export default Checkout;
