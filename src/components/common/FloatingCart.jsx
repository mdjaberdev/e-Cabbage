import React, { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "../../context/CartContext";
import CartDrawer from "./CartDrawer";

const FloatingCart = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const cartContext = useCart();
  const cartItems = cartContext?.cartItems || cartContext?.cart || [];

  const totalItemsCount = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + (item.quantity || 0), 0)
    : 0;

  return (
    <>
      <div
        onClick={() => setIsDrawerOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#80B500] hover:bg-[#6e9c00] text-white w-14 h-14 rounded-full shadow-2xl cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
        title="View Cart"
      >
        <div className="relative flex items-center justify-center">
          <LuShoppingCart
            size={26}
            className="transition-transform group-hover:rotate-12"
          />
          {totalItemsCount > 0 && (
            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-extrabold w-6 h-6 rounded-full flex items-center justify-center shadow-md border-2 border-white animate-bounce">
              {totalItemsCount}
            </span>
          )}
        </div>
      </div>

      <CartDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default FloatingCart;
