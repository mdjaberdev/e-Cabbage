import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../common/Container";
import Images from "../common/Images";

const TredingProductsTwo = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="bg-[#ECECEC] py-28">
      <Container>
        {/* Header Section */}
        <div className="text-center">
          <h3 className="text-Primary text-5xl font-bold font-Inter ">
            Trending Products
          </h3>
          <p className="text-[#546375] text-base font-Rubik mt-4">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {products.slice(30,39).map((item) => {
            const originalPrice = (
              item.price /
              (1 - item.discountPercentage / 100)
            ).toFixed(2);

            return (
              <div
                key={item.id}
                className="bg-white py-4 px-3 flex items-center gap-x-5 w-full rounded-md shadow-sm"
              >
                <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                  <Images
                    srcImg={item.thumbnail}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-[#223645] text-[18px] font-bold font-Inter hover:text-[#80B500] duration-100 truncate cursor-pointer">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-x-2 py-2">
                    <h5 className="text-[#223645] text-sm font-Nunito font-bold">
                      ${item.price.toFixed(2)}
                    </h5>
                    {item.discountPercentage > 0 && (
                      <p className="text-[#80B500] text-[12px] font-Nunito line-through">
                        ${originalPrice}
                      </p>
                    )}
                  </div>
                  <h3 className="text-[#223645] text-sm font-Nunito underline cursor-pointer hover:text-[#80B500] duration-200 w-fit">
                    Add To Cart
                  </h3>
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
