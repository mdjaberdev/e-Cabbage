import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "../common/Container";
import Images from "../common/Images";

import Fac1 from "/src/assets/productsFacilitiesOne.png";
import Fac2 from "/src/assets/productsFacilitiesTwo.png";
import Fac3 from "/src/assets/productsFacilitiesThree.png";
import Fac4 from "/src/assets/productsFacilitieFour.png";
import Fac5 from "/src/assets/productsFacilitiesFive.png";
import Fac6 from "/src/assets/productsFacilitiesSix.png";

const ProductsFacilities = () => {
  const [product, setProduct] = useState(() => {
    const savedProduct = localStorage.getItem("facility_product");
    return savedProduct ? JSON.parse(savedProduct) : null;
  });

  const [isLoading, setIsLoading] = useState(() => {
    return !localStorage.getItem("facility_product");
  });

  const navigate = useNavigate();

  const fetchCenterProduct = async () => {
    try {
      if (!product) setIsLoading(true);

      const response = await axios.get(
        "https://dummyjson.com/products/category/groceries"
      );
      const products = response.data.products;

      const randomIndex = Math.floor(Math.random() * products.length);
      const selectedProduct = products[randomIndex];

      setProduct(selectedProduct);
      localStorage.setItem("facility_product", JSON.stringify(selectedProduct));
    } catch (error) {
      console.error("Data not found", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!product) {
      fetchCenterProduct();
    }

    const intervalId = setInterval(() => {
      fetchCenterProduct();
    }, 600000); // ১০ মিনিট

    return () => clearInterval(intervalId);
  }, []);

  const leftFeatures = product
    ? [
        {
          img: Fac1,
          title: "Premium Quality",
          desc:
            product.description.length > 55
              ? product.description.slice(0, 55) + "..."
              : product.description,
        },
        {
          img: Fac2,
          title: "Highly Rated",
          desc: `Customers love this! Rated ${product.rating} out of 5 stars by verified buyers.`,
        },
        {
          img: Fac3,
          title: "Stock Status",
          desc: `Currently ${product.availabilityStatus || "in stock"} with ${product.stock} units available.`,
        },
      ]
    : [];

  const rightFeatures = product
    ? [
        {
          img: Fac4,
          title: "Order Flexibility",
          desc: `${product.shippingInformation || "Ships within 1-2 business days"} directly to your door.`,
        },
        {
          img: Fac5,
          title: "Special Discount",
          desc: `Get it now and enjoy ${product.discountPercentage}% off the regular retail price.`,
        },
        {
          img: Fac6,
          title: "Variety & Selection",
          desc: `${product.returnPolicy || "30 days return policy"} - shop with full confidence.`,
        },
      ]
    : [];

  return (
    <section className="py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-[#F9FCF5]/50 to-white relative">
      <Container>
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <span className="text-[#80B500] font-semibold text-sm tracking-widest uppercase bg-[#F4F9EB] px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
            Exclusive Selection
          </span>
          <h2 className="text-[#1A202C] text-3xl sm:text-4xl lg:text-5xl font-bold font-Inter tracking-tight">
            Product Facilities
          </h2>
          <p className="text-[#64748B] text-base font-Rubik mt-3 leading-relaxed">
            Discover exceptional quality items handpicked for your daily diagnostic and lifestyle requirements.
          </p>
        </div>

        {isLoading ? (
          // Loading Spinner
          <div className="flex justify-center items-center h-[400px]">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-[#F4F9EB] rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-[#80B500] rounded-full animate-spin border-t-transparent"></div>
            </div>
          </div>
        ) : product ? (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-16">
            
            {/* Left Side Facilities */}
            <div className="flex flex-col gap-6 order-2 lg:order-1 w-full lg:w-1/3">
              {leftFeatures.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-x-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#80B500]/40 transition-all duration-300"
                >
                  <div className="shrink-0 w-14 h-14 bg-[#F4F9EB] rounded-xl flex items-center justify-center group-hover:bg-[#80B500] transition-colors duration-300">
                    <Images
                      srcImg={item.img}
                      className="w-7 h-7 object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>

                  <div>
                    <h4 className="text-[#1A202C] text-[18px] lg:text-[20px] font-bold font-Inter group-hover:text-[#80B500] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-[#666E77] text-sm font-Nunito leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center API Image Spotlight */}
            <div className="order-1 lg:order-2 w-full lg:w-1/3 flex flex-col items-center">
              <div className="relative group">
                {/* Background Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#80B500]/20 to-[#6c9a00]/20 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

                {/* Main Image Circle */}
                <div className="relative bg-white rounded-full w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] flex justify-center items-center p-8 border-4 border-[#F4F9EB] shadow-2xl">
                  <Images
                    srcImg={product.thumbnail}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Price Tag Badge */}
                  <div className="absolute top-6 right-6 bg-[#80B500] text-white font-bold font-Nunito px-4 py-2 rounded-full shadow-lg text-base tracking-wide border-2 border-white">
                    ${product.price}
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <span className="text-[#80B500] font-bold text-xs tracking-widest uppercase bg-[#F4F9EB] px-3 py-1 rounded-md">
                  {product.category.replace("-", " ")}
                </span>
                <h3 className="text-[#1A202C] font-Inter font-bold text-2xl mt-2 line-clamp-1">
                  {product.title}
                </h3>

                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="mt-5 bg-[#80B500] text-white font-Nunito font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#6c9a00] hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Right Side Facilities */}
            <div className="flex flex-col gap-6 order-3 w-full lg:w-1/3">
              {rightFeatures.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-end gap-x-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#80B500]/40 transition-all duration-300"
                >
                  <div className="text-left lg:text-right">
                    <h4 className="text-[#1A202C] text-[18px] lg:text-[20px] font-bold font-Inter group-hover:text-[#80B500] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-[#666E77] text-sm font-Nunito leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>

                  <div className="shrink-0 w-14 h-14 bg-[#F4F9EB] rounded-xl flex items-center justify-center group-hover:bg-[#80B500] transition-colors duration-300">
                    <Images
                      srcImg={item.img}
                      className="w-7 h-7 object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        ) : null}
      </Container>
    </section>
  );
};

export default ProductsFacilities;