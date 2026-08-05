import React, { useState } from "react";
import Container from "../common/Container";
import {
  FaAngleRight,
  FaCheckCircle,
  FaSpinner,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const { cartItems, clearCart, setCartItems } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "Dhaka",
    orderNotes: "",
    paymentMethod: "cod",
    senderNumber: "",
    transactionId: "",
  });

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [placedOrderSummary, setPlacedOrderSummary] = useState(null);
  const [copiedNumber, setCopiedNumber] = useState("");
  const [isOrderIdCopied, setIsOrderIdCopied] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (number, type) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(type);
    setTimeout(() => setCopiedNumber(""), 2000);
  };


  const handleCopyOrderId = (orderId) => {
    navigator.clipboard.writeText(orderId);
    setIsOrderIdCopied(true);
    setTimeout(() => setIsOrderIdCopied(false), 2000);
  };

  const subtotal = cartItems.reduce((total, item) => {
    const priceNumber =
      typeof item.productPrice === "string"
        ? parseFloat(item.productPrice.replace(/[^0-9.]/g, "")) || 0
        : Number(item.productPrice) || 0;
    return total + priceNumber * item.quantity;
  }, 0);

  const getShippingCost = (cityName) => {
    const city = cityName.toLowerCase().trim();
    if (city === "dhaka") {
      return 60;
    } else if (city === "") {
      return 0;
    } else {
      return 130;
    }
  };

  const shippingCost = getShippingCost(formData.city);
  const grandTotal = subtotal + shippingCost;

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (
      formData.paymentMethod === "bkash" ||
      formData.paymentMethod === "nagad"
    ) {
      if (!formData.senderNumber.trim() || !formData.transactionId.trim()) {
        alert(
          `Please provide your ${formData.paymentMethod.toUpperCase()} mobile number and Transaction ID (TrxID).`,
        );
        return;
      }
    }

    setIsLoading(true);

    setTimeout(() => {
      const orderData = {
        orderId: "ORD-" + Math.floor(100000 + Math.random() * 900000),
        customer: { ...formData },
        items: [...cartItems],
        subtotal: subtotal,
        shippingFee: shippingCost,
        totalAmount: grandTotal,
        date: new Date().toLocaleDateString(),
      };

      const existingOrders = JSON.parse(localStorage.getItem("myOrders")) || [];
      localStorage.setItem(
        "myOrders",
        JSON.stringify([...existingOrders, orderData]),
      );

      setPlacedOrderSummary(orderData);
      setIsLoading(false);
      setIsOrderPlaced(true);

      if (clearCart) {
        clearCart();
      } else if (setCartItems) {
        setCartItems([]);
      }
    }, 1200);
  };

  if (isOrderPlaced && placedOrderSummary) {
    return (
      <Container>
        <div className="py-20 text-center max-w-lg mx-auto bg-white my-12 rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex justify-center mb-4 text-[#80B500]">
            <FaCheckCircle size={60} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-Inter text-Primary mb-2">
            Thank You For Your Order!
          </h2>

          {/* Order ID with Copy Button */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <p className="text-xs text-gray-400 font-mono">
              Order Reference:{" "}
              <span className="text-sm font-bold text-gray-800">
                {placedOrderSummary.orderId}
              </span>
            </p>
            <button
              onClick={() => handleCopyOrderId(placedOrderSummary.orderId)}
              className="text-[#80B500] hover:text-[#6e9c00] flex items-center gap-1 text-xs font-semibold bg-gray-50 hover:bg-gray-100 px-2.5 py-1 rounded border border-gray-200 transition-colors cursor-pointer"
              title="Copy Order ID"
            >
              {isOrderIdCopied ? (
                <>
                  <FaCheck size={12} /> Copied
                </>
              ) : (
                <>
                  <FaRegCopy size={12} /> Copy
                </>
              )}
            </button>
          </div>

          <p className="text-[#666E77] text-sm mb-6 leading-relaxed">
            Your order has been successfully placed. Payment method:{" "}
            <span className="font-semibold text-gray-800 uppercase">
              {placedOrderSummary.customer.paymentMethod}
            </span>
            . We will contact you shortly at{" "}
            <span className="font-semibold text-gray-800">
              {placedOrderSummary.customer.phone}
            </span>{" "}
            to verify details. Total Payable (including shipping):{" "}
            <span className="font-bold text-[#80B500]">
              ${placedOrderSummary.totalAmount.toFixed(2)}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/track-order")}
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors cursor-pointer text-sm"
            >
              Track Order Status
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-[#80B500] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6e9c00] transition-colors cursor-pointer shadow-sm text-sm"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <section className="bg-gray-50/50 min-h-screen">
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-20 lg:py-28">
        <Container>
          <div>
            <h3 className="text-Primary text-3xl sm:text-4xl font-bold font-Inter">
              Checkout
            </h3>
            <h5 className="text-[#133344] text-sm sm:text-base font-Nunito flex items-center gap-2 mt-2">
              <Link to="/" className="hover:text-[#80B500] transition-colors">
                Home
              </Link>
              <FaAngleRight size={12} /> Checkout
            </h5>
          </div>
        </Container>
      </div>

      <div className="py-12 lg:py-20">
        <Container>
          <form
            onSubmit={handleOrderSubmit}
            className="flex flex-col lg:flex-row justify-between gap-8"
          >
            {/* Details Form */}
            <div className="w-full lg:w-[64%] bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-Primary text-lg sm:text-xl font-bold font-Inter mb-6 border-b border-gray-100 pb-3">
                Billing Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#80B500]"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#80B500]"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#80B500]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#80B500]"
                    placeholder="+880 1234 567890"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#80B500]"
                  placeholder="House number and street name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Town / City *{" "}
                  <span className="text-xs text-[#80B500] font-normal">
                    (Shipping charge updates based on city)
                  </span>
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  list="city-options"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#80B500]"
                  placeholder="Select or type your city"
                />
                <datalist id="city-options">
                  <option value="Dhaka" />
                  <option value="Chattogram" />
                  <option value="Sylhet" />
                  <option value="Rajshahi" />
                  <option value="Khulna" />
                  <option value="Barishal" />
                  <option value="Rangpur" />
                  <option value="Mymensingh" />
                  <option value="Comilla" />
                  <option value="Gazipur" />
                  <option value="Narayanganj" />
                </datalist>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Order Notes (Optional)
                </label>
                <textarea
                  name="orderNotes"
                  rows="3"
                  value={formData.orderNotes}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#80B500]"
                  placeholder="Notes about your order, e.g. special delivery instructions."
                ></textarea>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[34%]">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 sticky top-6">
                <h4 className="text-Primary text-lg font-bold font-Inter mb-4 border-b border-gray-100 pb-3">
                  Your Order
                </h4>

                <div className="space-y-3 mb-6 max-h-56 overflow-y-auto pr-1 divide-y divide-gray-50">
                  {cartItems.length === 0 ? (
                    <p className="text-xs text-gray-400 text-center py-4">
                      Your cart is empty
                    </p>
                  ) : (
                    cartItems.map((item) => {
                      const itemPrice =
                        typeof item.productPrice === "string"
                          ? parseFloat(
                              item.productPrice.replace(/[^0-9.]/g, ""),
                            ) || 0
                          : Number(item.productPrice) || 0;
                      return (
                        <div
                          key={item.id}
                          className="flex justify-between items-center text-xs sm:text-sm text-[#666E77] pt-2 first:pt-0"
                        >
                          <span className="truncate w-2/3 font-medium text-gray-800">
                            {item.productTitle}{" "}
                            <span className="text-[#80B500]">
                              × {item.quantity}
                            </span>
                          </span>
                          <span className="font-semibold">
                            ${(itemPrice * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>

                <div className="flex justify-between border-t border-gray-100 pt-3 mb-2 text-sm">
                  <span className="text-[#666E77] font-medium">Subtotal</span>
                  <span className="text-Primary font-bold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-100 pb-4 mb-4 text-sm">
                  <span className="text-[#666E77] font-medium">
                    Shipping ({formData.city || "Select City"}):
                  </span>
                  <span className="text-[#80B500] font-bold">
                    ${shippingCost.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="text-Primary text-base font-bold">
                    Total
                  </span>
                  <span className="text-[#80B500] text-base font-bold">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>

                {/* payment methods */}
                <div className="space-y-3 mb-6">
                  <span className="block text-xs font-bold text-gray-800 mb-1">
                    Select Payment Method *
                  </span>

                  {/* COD */}
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === "cod"}
                        onChange={handleChange}
                        className="mt-0.5 accent-[#80B500]"
                      />
                      <div>
                        <span className="block text-xs font-bold text-gray-800">
                          Cash on Delivery
                        </span>
                        <span className="block text-[11px] text-gray-500 mt-0.5 leading-tight">
                          Pay with cash at your doorstep.
                        </span>
                      </div>
                    </label>
                  </div>

                  {/* bKash */}
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between">
                      <label className="flex items-start gap-2.5 cursor-pointer w-full">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bkash"
                          checked={formData.paymentMethod === "bkash"}
                          onChange={handleChange}
                          className="mt-0.5 accent-[#80B500]"
                        />
                        <div className="w-full">
                          <span className="block text-xs font-bold text-gray-800">
                            bKash Personal
                          </span>
                          <span className="block text-[11px] text-gray-500 mt-0.5 leading-tight flex items-center justify-between">
                            <span>
                              Send money to:{" "}
                              <strong className="text-gray-700">
                                01700-000000
                              </strong>
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy("01700000000", "bkash")}
                              className="text-[#80B500] hover:text-[#6e9c00] flex items-center gap-1 text-[10px] font-semibold bg-white px-2 py-0.5 rounded border border-gray-200 cursor-pointer"
                            >
                              {copiedNumber === "bkash" ? (
                                <>
                                  <FaCheck size={10} /> Copied
                                </>
                              ) : (
                                <>
                                  <FaRegCopy size={10} /> Copy
                                </>
                              )}
                            </button>
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Nagad */}
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between">
                      <label className="flex items-start gap-2.5 cursor-pointer w-full">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="nagad"
                          checked={formData.paymentMethod === "nagad"}
                          onChange={handleChange}
                          className="mt-0.5 accent-[#80B500]"
                        />
                        <div className="w-full">
                          <span className="block text-xs font-bold text-gray-800">
                            Nagad Personal
                          </span>
                          <span className="block text-[11px] text-gray-500 mt-0.5 leading-tight flex items-center justify-between">
                            <span>
                              Send money to:{" "}
                              <strong className="text-gray-700">
                                01800-000000
                              </strong>
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy("01800000000", "nagad")}
                              className="text-[#80B500] hover:text-[#6e9c00] flex items-center gap-1 text-[10px] font-semibold bg-white px-2 py-0.5 rounded border border-gray-200 cursor-pointer"
                            >
                              {copiedNumber === "nagad" ? (
                                <>
                                  <FaCheck size={10} /> Copied
                                </>
                              ) : (
                                <>
                                  <FaRegCopy size={10} /> Copy
                                </>
                              )}
                            </button>
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* card online gateway */}
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={handleChange}
                        className="mt-0.5 accent-[#80B500]"
                      />
                      <div>
                        <span className="block text-xs font-bold text-gray-800">
                          Credit / Debit Card
                        </span>
                        <span className="block text-[11px] text-gray-500 mt-0.5 leading-tight">
                          Secure online card payment.
                        </span>
                      </div>
                    </label>
                  </div>

                  {/* bKash / nagad transaction details input  */}
                  {(formData.paymentMethod === "bkash" ||
                    formData.paymentMethod === "nagad") && (
                    <div className="p-3 bg-green-50/50 border border-green-200 rounded-lg space-y-3 mt-3 animate-fadeIn">
                      <p className="text-[11px] text-[#80B500] font-semibold">
                        Please send ${grandTotal.toFixed(2)} using{" "}
                        {formData.paymentMethod.toUpperCase()} and enter your
                        details below:
                      </p>
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                          Sender Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="senderNumber"
                          value={formData.senderNumber}
                          onChange={handleChange}
                          placeholder="e.g. 01XXXXXXXXX"
                          className="w-full border border-gray-200 rounded-md p-2 text-xs focus:outline-none focus:border-[#80B500] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                          Transaction ID (TrxID) *
                        </label>
                        <input
                          type="text"
                          name="transactionId"
                          value={formData.transactionId}
                          onChange={handleChange}
                          placeholder="e.g. 9H7K3L2M1N"
                          className="w-full border border-gray-200 rounded-md p-2 text-xs focus:outline-none focus:border-[#80B500] bg-white"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading || cartItems.length === 0}
                  className="w-full text-center flex items-center justify-center gap-2 cursor-pointer bg-[#80B500] hover:bg-[#6e9c00] text-white py-3 rounded-lg font-bold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin" size={16} />{" "}
                      Processing Order...
                    </>
                  ) : (
                    "Place Order"
                  )}
                </button>
              </div>
            </div>
          </form>
        </Container>
      </div>
    </section>
  );
};

export default Checkout;
