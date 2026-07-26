import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ১. কার্টে প্রোডাক্ট যোগ বা পরিমাণ বাড়ানোর ফাংশন (স্টক চেক সহ)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // যদি প্রোডাক্টটি আগেই কার্টে থাকে, তবে স্টক চেক করুন
        const maxStock = product.stock || 100; // যদি API থেকে stock না আসে ডিফল্ট 100 ধরবে
        if (existingItem.quantity >= maxStock) {
          alert(`Sorry! Only ${maxStock} items available in stock.`);
          return prevItems; // স্টক শেষ হলে বাড়াবে না
        }

        // স্টক থাকলে পরিমাণ ১ বাড়াবে
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        // নতুন প্রোডাক্ট হলে কার্টে যুক্ত করবে (স্টক ইনফরমেশন সহ)
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // ২. পরিমাণ কমানোর ফাংশন
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // ৩. কার্ট থেকে সম্পূর্ণ ডিলিট করার ফাংশন
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // ৪. অর্ডার সম্পন্ন হলে কার্ট খালি করার ফাংশন
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
