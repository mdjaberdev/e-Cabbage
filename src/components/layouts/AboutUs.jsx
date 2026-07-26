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
    <Container>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start my-20 gap-10 lg:gap-0">
        <div className="flex gap-x-5 lg:gap-x-10">
          <Images
            className="w-[180px] border border-[#A6A6C7] sm:w-[220px] lg:w-[263px] h-[320px] lg:h-[490px] object-cover rounded-lg"
            srcImg={products[currentIndex]?.thumbnail}
          />

          <Images
            className="mt-10 lg:mt-20 w-[180px] border border-[#A6A6C7] sm:w-[220px] lg:w-[263px] h-[320px] lg:h-[490px] object-cover rounded-lg"
            srcImg={products[currentIndex + 1]?.thumbnail}
          />
        </div>

        <div className="mt-0 lg:mt-20 text-center lg:text-left">
          <h4 className="text-[#80B500] text-[18px] font-Nunito font-bold">
            Know More About Shop
          </h4>

          <h3 className="text-Primary text-3xl lg:text-[50px] font-Inter font-bold leading-tight lg:leading-16 lg:w-[528px]">
            Trusted Organic Food Store For People
          </h3>

          <div className="text-[#546375] text-base lg:text-[18px] font-Nunito leading-7 lg:w-[528px] mt-5">
            <p>
              Buy natural, sustainable and chemical-free products from local the
              country. We are a strong community of 100,000+ sellers who aspire
              to be good, do good, and spread goodness.
            </p>

            <p className="mt-7">
              We are a democratic, self-sustaining, two-sided marketplace which
              thrives on trust and is built on community and quality content.
            </p>
          </div>

          <h4 className="text-[#223645] text-base font-bold font-Playfair mt-5">
            Jerry Henson
          </h4>

          <p className="text-[#808B94] text-[12px] font-Nunito">
            / Shop Director
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
