import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import mixitup from "mixitup";

import Container from "../common/Container";
import Button from "../common/Button";
import Products from "../common/Products";
import Badge from "../common/Badge";
import { useCart } from "../../context/CartContext";

const Ourproducts = () => {
  const containerRef = useRef(null);
  const mixerRef = useRef(null);
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=40",
        );

        const allProducts = data.products.map((item, index) => {
          let category = "";
          if (index < 8) category = "food";
          else if (index < 16) category = "vegetables";
          else if (index < 24) category = "dried";
          else if (index < 32) category = "brek";
          else category = "fish";

          return {
            ...item,
            mixCategory: category,
          };
        });

        setProducts(allProducts);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (!products.length || !containerRef.current) return;

    if (mixerRef.current) {
      mixerRef.current.destroy();
    }

    mixerRef.current = mixitup(containerRef.current, {
      selectors: {
        target: ".mix",
      },
      animation: {
        duration: 400,
      },
      load: {
        filter: ".dried",
      },
    });

    return () => {
      mixerRef.current?.destroy();
    };
  }, [products]);

  const totalCartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div className="my-12 sm:my-16 lg:my-20 relative">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <h3 className="text-Primary text-3xl sm:text-4xl lg:text-5xl font-bold font-Inter">
            Our Products
          </h3>
          <p className="text-[#546375] text-sm lg:text-base font-Rubik mt-3 sm:mt-4">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>

          {/* Live Cart Counter Badge */}
          <div className="mt-4 inline-block bg-gray-100 px-4 py-1.5 rounded-full shadow-sm text-xs font-bold text-[#80B500]">
            Total Cart Items: {totalCartCount}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-x-10 mt-8 sm:mt-10 px-2">
          <Button
            data-filter=".food"
            className="[&.mixitup-control-active]:bg-white [&.mixitup-control-active]:text-[#223645] rounded-4xl duration-150 cursor-pointer text-xs sm:text-sm px-4 py-2"
            btnTxt="Food & Drinks"
          />
          <Button
            data-filter=".vegetables"
            className="[&.mixitup-control-active]:bg-white [&.mixitup-control-active]:text-[#223645] rounded-4xl duration-150 cursor-pointer text-xs sm:text-sm px-4 py-2"
            btnTxt="Vegetables"
          />
          <Button
            data-filter=".dried"
            className="[&.mixitup-control-active]:bg-white [&.mixitup-control-active]:text-[#223645] rounded-4xl duration-150 cursor-pointer text-xs sm:text-sm px-4 py-2"
            btnTxt="Dried Foods"
          />
          <Button
            data-filter=".brek"
            className="[&.mixitup-control-active]:bg-white [&.mixitup-control-active]:text-[#223645] rounded-4xl duration-150 cursor-pointer text-xs sm:text-sm px-4 py-2"
            btnTxt="Bread & Cake"
          />
          <Button
            data-filter=".fish"
            className="[&.mixitup-control-active]:bg-white [&.mixitup-control-active]:text-[#223645] rounded-4xl duration-150 cursor-pointer text-xs sm:text-sm px-4 py-2"
            btnTxt="Fish & Meat"
          />
        </div>

        {/* Products Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:mt-10"
        >
          {products.map((item) => {
            const roundedDiscount = Math.round(item.discountPercentage);

            return (
              <div key={item.id} className={`mix ${item.mixCategory} relative`}>
                <Products
                  id={item.id}
                  productImg={item.thumbnail}
                  productReview={`(${item.rating})`}
                  productTitle={item.title}
                  productPrice={`$${item.price}`}
                  stock={item.stock}
                  productItem={item}
                />
                {roundedDiscount > 0 && (
                  <Badge badgeTxt={`-${roundedDiscount}%`} />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Ourproducts;
