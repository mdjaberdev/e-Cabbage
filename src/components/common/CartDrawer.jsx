import React from "react";
import { useCart } from "../../context/CartContext";
import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineShopping,
} from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import Images from "./Images";
import { Link } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const subtotal = cartItems.reduce((total, item) => {
    const priceNumber =
      parseFloat(String(item.productPrice || "").replace(/[^0-9.]/g, "")) || 0;
    return total + priceNumber * item.quantity;
  }, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-[#80B500]/10 text-[#80B500] rounded-xl">
                <AiOutlineShopping size={22} />
              </span>
              <div>
                <h2 className="text-lg font-bold font-Inter text-gray-900">
                  Shopping Cart
                </h2>
                <p className="text-xs text-gray-500 font-medium">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"}{" "}
                  in your cart
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 p-2.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-28 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-4 shadow-inner">
                  <AiOutlineShopping size={40} />
                </div>
                <p className="text-gray-800 font-bold mb-1 text-lg">
                  Your cart is empty
                </p>
                <p className="text-xs text-gray-400 max-w-[220px] mb-6">
                  Add some fresh products to your cart and start shopping!
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#80B500] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#80B500]/25 hover:bg-[#6e9c00] transition-all cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => {
                const itemPrice =
                  parseFloat(
                    String(item.productPrice || "").replace(/[^0-9.]/g, ""),
                  ) || 0;

                const isMaxStock = item.stock && item.quantity >= item.stock;

                return (
                  <div
                    key={item.id}
                    className="flex flex-col p-3.5 bg-gray-50 border border-gray-100 rounded-2xl group transition-all hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="w-16 h-16 bg-white border border-gray-200/80 rounded-xl p-1.5 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-2xs">
                          <Images
                            srcImg={item.productImg}
                            className="max-h-full object-contain mix-blend-multiply"
                          />
                        </div>

                        <div>
                          <h4 className="text-xs font-bold text-gray-900 line-clamp-1 mb-1">
                            {item.productTitle}
                          </h4>
                          <p className="text-xs text-[#80B500] font-extrabold mb-1">
                            {item.productPrice}
                          </p>
                        </div>
                      </div>

                      <div className="text-right flex flex-col items-end justify-between h-16">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <AiOutlineDelete size={16} />
                        </button>
                        <p className="text-xs font-extrabold text-gray-900">
                          ${(itemPrice * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity & Stock Status Row */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200/60">
                      <div className="inline-flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white shadow-2xs">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2.5 py-1 text-gray-600 hover:bg-gray-100 transition-colors text-xs font-bold cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs font-bold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-2.5 py-1 text-gray-600 hover:bg-gray-100 transition-colors text-xs font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      {item.stock !== undefined && (
                        <span
                          className={`text-[11px] font-bold ${isMaxStock ? "text-red-500" : "text-gray-500"}`}
                        >
                          {isMaxStock
                            ? "Max stock reached!"
                            : `Stock left: ${item.stock - item.quantity}`}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-100 px-6 py-5 bg-white shadow-lg">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs text-gray-500 font-medium">
                  <span>Shipping</span>
                  <span className="text-gray-700">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-100">
                  <span>Subtotal</span>
                  <span className="text-[#80B500] text-lg font-extrabold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/cart"
                  onClick={onClose}
                  className="w-full text-center bg-gray-50 border border-gray-200 text-gray-700 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-all shadow-2xs"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 text-center bg-[#80B500] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#6e9c00] transition-all shadow-md shadow-[#80B500]/25"
                >
                  Checkout <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
