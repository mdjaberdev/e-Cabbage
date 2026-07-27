import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../common/Container";
import Images from "../common/Images";
import { useCart } from "../../context/CartContext";
 // Apnar CartContext er proper path din

const TredingProductsTwo = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems } = useCart(); // Context theke addToCart ebong cartItems nawa holo
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=50",
        );
        setProducts(data.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  // Handle Add To Cart using Context
  const handleAddToCart = (product) => {
    addToCart(product);

    // Temporary success notification
    setNotification(`"${product.title}" added to cart!`);
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const totalCartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div className="bg-[#ECECEC] py-16 sm:py-20 lg:py-28 relative">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-5 right-5 z-50 bg-[#80B500] text-white px-6 py-3 rounded-lg shadow-xl font-Nunito font-bold transition-all duration-300 animate-bounce">
          {notification}
        </div>
      )}

      <Container>
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto px-4 relative">
          <h3 className="text-Primary text-3xl sm:text-4xl lg:text-5xl font-bold font-Inter">
            Trending Products
          </h3>
          <p className="text-[#546375] text-sm lg:text-base font-Rubik mt-3 sm:mt-4">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>

          {/* Live Cart Counter Badge */}
          <div className="mt-4 inline-block bg-white px-4 py-1.5 rounded-full shadow-sm text-xs font-bold text-[#80B500]">
            Total Cart Items: {totalCartCount}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 lg:mt-10">
          {products.slice(30, 39).map((item) => {
            const originalPrice = (
              item.price /
              (1 - item.discountPercentage / 100)
            ).toFixed(2);

            return (
              <div
                key={item.id}
                className="bg-white py-4 px-3 flex items-center gap-x-5 w-full rounded-md shadow-sm"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                  <Images
                    srcImg={item.thumbnail}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-[#223645] text-base sm:text-[18px] font-bold font-Inter hover:text-[#80B500] duration-100 truncate cursor-pointer">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-x-2 py-1.5 sm:py-2">
                    <h5 className="text-[#223645] text-sm font-Nunito font-bold">
                      ${item.price.toFixed(2)}
                    </h5>
                    {item.discountPercentage > 0 && (
                      <p className="text-[#80B500] text-[12px] font-Nunito line-through">
                        ${originalPrice}
                      </p>
                    )}
                  </div>

                  {/* Add To Cart Button */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="text-[#223645] text-sm font-Nunito underline cursor-pointer hover:text-[#80B500] duration-200 w-fit bg-transparent border-none p-0"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default TredingProductsTwo;
