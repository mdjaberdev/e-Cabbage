import React, { createContext, useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Could not save cart to localStorage", error);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    const title = product?.productTitle || product?.title || "Item";
    const toastId = `cart-${product.id}`;

    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      if (
        product.stock !== undefined &&
        existingItem.quantity >= product.stock
      ) {
        toast.error("Sorry, this item is out of stock!", {
          toastId: `${toastId}-out`,
        });
        return;
      }

      toast.info(`Quantity updated for "${title}"!`, { toastId });
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      toast.success(`"${title}" added to your cart!`, { toastId });
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    const existingItem = cartItems.find((item) => item.id === id);
    if (!existingItem) return;

    if (
      existingItem.stock !== undefined &&
      existingItem.quantity >= existingItem.stock
    ) {
      toast.warning("Maximum available stock reached!", {
        toastId: `stock-${id}`,
      });
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    const itemToRemove = cartItems.find((item) => item.id === id);
    if (itemToRemove) {
      const title = itemToRemove.productTitle || itemToRemove.title || "Item";
      toast.info(`"${title}" removed from cart!`, { toastId: `remove-${id}` });
    }
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    toast.info("Cart cleared successfully!");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
