import React, { useState } from "react";
import Container from "../common/Container";
import {
  FaSearch,
  FaBoxOpen,
  FaTruck,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TrackOrder = () => {
  const [searchId, setSearchId] = useState("");
  const [searchedOrder, setSearchedOrder] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchId.trim()) return;

    setLoading(true);
    setSearchedOrder(null);
    setNotFound(false);

    setTimeout(() => {
      const allOrders = JSON.parse(localStorage.getItem("myOrders")) || [];
      const found = allOrders.find(
        (ord) => ord.orderId.toLowerCase() === searchId.toLowerCase().trim(),
      );

      if (found) {
        setSearchedOrder(found);
        setNotFound(false);
      } else {
        setSearchedOrder(null);
        setNotFound(true);
      }
      setLoading(false);
    }, 800);
  };

  return (
    <section className="bg-gray-50/50 min-h-screen py-16">
      <Container>
        <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold font-Inter text-Primary text-center mb-2">
            Track Your Order
          </h2>
          <p className="text-sm text-[#666E77] text-center mb-6">
            Enter your{" "}
            <span className="font-semibold text-gray-800">
              Order Reference ID
            </span>{" "}
            (e.g. ORD-XXXXXX) received during checkout.
          </p>

          <form onSubmit={handleSearch} className="flex gap-2 mb-8">
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Order ID (e.g. ORD-123456)"
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#80B500]"
              required
            />
            <button
              type="submit"
              className="bg-[#80B500] hover:bg-[#6e9c00] text-white px-6 rounded-lg font-bold text-sm transition-colors cursor-pointer flex items-center justify-center min-w-[100px]"
            >
              {loading ? <FaSpinner className="animate-spin" /> : "Track"}
            </button>
          </form>

          {/* Not Found Message */}
          {notFound && (
            <div className="text-center py-6 text-red-500 text-sm font-medium bg-red-50 rounded-lg border border-red-100">
              Sorry! No order found with this ID. Please check and try again.
            </div>
          )}

          {/* Order Details Found */}
          {searchedOrder && (
            <div className="border border-gray-100 rounded-xl p-6 bg-gray-50/50 space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <div>
                  <span className="text-xs text-gray-400 block">Order ID</span>
                  <span className="font-bold text-gray-800 text-sm">
                    {searchedOrder.orderId}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">
                    Order Date
                  </span>
                  <span className="font-medium text-gray-600 text-sm">
                    {searchedOrder.date}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-sm text-[#666E77]">
                <p>
                  <strong className="text-gray-800">Customer Name:</strong>{" "}
                  {searchedOrder.customer.firstName}{" "}
                  {searchedOrder.customer.lastName}
                </p>
                <p>
                  <strong className="text-gray-800">Phone:</strong>{" "}
                  {searchedOrder.customer.phone}
                </p>
                <p>
                  <strong className="text-gray-800">Delivery Address:</strong>{" "}
                  {searchedOrder.customer.address},{" "}
                  {searchedOrder.customer.city}
                </p>
                <p>
                  <strong className="text-gray-800">Payment Method:</strong>{" "}
                  Cash on Delivery
                </p>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-bold text-xs text-gray-700 uppercase mb-3">
                  Order Status
                </h4>
                <div className="flex items-center justify-between text-xs font-semibold text-[#80B500] bg-white p-3 rounded-lg border border-gray-100">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#80B500] animate-pulse"></span>
                    Your order is currently{" "}
                    <strong className="text-gray-800 ml-0.5">Pending</strong>{" "}
                    (Awaiting verification).
                  </span>
                </div>
              </div>

              <div className="border-t pt-4 flex justify-between items-center text-sm font-bold">
                <span className="text-gray-700">Total Payable:</span>
                <span className="text-[#80B500]">
                  ${searchedOrder.totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TrackOrder;
