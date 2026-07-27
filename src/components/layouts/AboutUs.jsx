import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../common/Container";
import Images from "../common/Images";

const AboutUs = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=40",
        );
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= products.length - 2) {
          return 0;
        }
        return prev + 2;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [products]);

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
          
          {/* Left Side: Product Image Showcase with Modern Cards & Glow */}
          <div className="flex justify-center items-center gap-x-4 sm:gap-x-6 lg:gap-x-8 relative w-full lg:w-auto">
            {/* Subtle background glow effect */}
            <div className="absolute -inset-4 bg-[#80B500]/5 rounded-3xl blur-xl -z-10"></div>

            {/* First Image Box */}
            <div className="bg-white p-2 sm:p-3 rounded-2xl shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl">
              <Images
                className="w-[140px] xs:w-[160px] sm:w-[200px] lg:w-[240px] h-[260px] sm:h-[380px] lg:h-[460px] object-cover rounded-xl bg-gray-50"
                srcImg={products[currentIndex]?.thumbnail}
              />
            </div>

            {/* Second Image Box (Staggered with mt-8/12/16 for modern look) */}
            <div className="mt-8 sm:mt-12 lg:mt-16 bg-white p-2 sm:p-3 rounded-2xl shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl">
              <Images
                className="w-[140px] xs:w-[160px] sm:w-[200px] lg:w-[240px] h-[260px] sm:h-[380px] lg:h-[460px] object-cover rounded-xl bg-gray-50"
                srcImg={products[currentIndex + 1]?.thumbnail}
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="text-center lg:text-left lg:max-w-xl w-full">
            <span className="inline-block bg-[#80B500]/10 text-[#80B500] text-xs sm:text-sm lg:text-[16px] font-Nunito font-bold px-4 py-1.5 rounded-full mb-3 lg:mb-4">
              Know More About Shop
            </span>

            <h3 className="text-Primary text-2xl sm:text-3xl lg:text-[45px] font-Inter font-bold leading-snug sm:leading-tight lg:leading-[55px]">
              Trusted Organic Food Store For People
            </h3>

            <div className="text-[#546375] text-sm sm:text-base lg:text-[18px] font-Nunito leading-relaxed mt-4 sm:mt-5 space-y-3 sm:space-y-4">
              <p>
                Buy natural, sustainable and chemical-free products from local
                the country. We are a strong community of 100,000+ sellers who
                aspire to be good, do good, and spread goodness.
              </p>

              <p>
                We are a democratic, self-sustaining, two-sided marketplace
                which thrives on trust and is built on community and quality
                content.
              </p>
            </div>

            {/* Director Details */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100 flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div>
                <h4 className="text-[#223645] text-base sm:text-lg font-bold font-Playfair">
                  Jerry Henson
                </h4>
                <p className="text-[#808B94] text-xs font-Nunito tracking-wider uppercase mt-0.5">
                  / Shop Director
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutUs;