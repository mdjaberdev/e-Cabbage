import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem("wishlistItems");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
      console.error("Failed to load wishlist from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    } catch (error) {
      console.error("Failed to save wishlist to localStorage:", error);
    }
  }, [wishlistItems]);

  const toggleWishlist = (product) => {
    const title = product?.productTitle || product?.title || "Item";
    const toastId = `wishlist-${product.id}`;

    const exists = wishlistItems.some((item) => item.id === product.id);

    if (exists) {
      toast.denger(`"${title}" removed from your wishlist!`, { toastId });
      setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      toast.success(`"${title}" added to your wishlist!`, { toastId });
      setWishlistItems((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (id) => {
    const itemToRemove = wishlistItems.find((item) => item.id === id);
    if (itemToRemove) {
      const title = itemToRemove.productTitle || itemToRemove.title || "Item";
      toast.info(`"${title}" removed from your wishlist!`, {
        toastId: `wishlist-remove-${id}`,
      });
    }
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, toggleWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
