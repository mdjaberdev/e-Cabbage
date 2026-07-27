import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";

const TodaysHotDeals = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [hotProducts, setHotProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fallbackProducts = [
    {
      id: 1,
      title: "Original Stock Honey Combo Package",
      description:
        "Cur tantas regiones barbarorum obiit, tot maria transmist summo bono fruitur id est voluptate barbarorum",
      price: 149.99,
      rating: 4.8,
      category: "Organic Foods",
      thumbnail:
        "https://images.unsplash.com/photo-1587049352847-4a222e784d38?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Pure Organic Wildflower Honey",
      description:
        "Pure and raw wildflower honey packed with natural antioxidants and essential health benefits for your daily routine.",
      price: 89.5,
      rating: 4.9,
      category: "Herbal Medicine",
      thumbnail:
        "https://images.unsplash.com/photo-1587049352847-4a222e784d38?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Fresh Farm Organic Vegetables Basket",
      description:
        "Hand-picked farm-fresh organic vegetables free from harmful chemicals, perfect for daily healthy diet.",
      price: 65.0,
      rating: 4.7,
      category: "Vegetables items",
      thumbnail:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Cold Pressed Extra Virgin Olive Oil",
      description:
        "Premium cold-pressed extra virgin olive oil ideal for body therapy, skin care, and healthy cooking.",
      price: 120.0,
      rating: 4.9,
      category: "Olive Oil massage",
      thumbnail:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Fresh Ocean Wild Caught Fish",
      description:
        "Nutritious wild-caught ocean fish rich in Omega-3 fatty acids for superior family dinner nutrition.",
      price: 95.0,
      rating: 4.6,
      category: "Fishes & meats",
      thumbnail:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Organic Ashwagandha Herbal Powder",
      description:
        "Traditional herbal remedies to boost natural immunity and reduce daily stress levels effectively.",
      price: 45.0,
      rating: 4.8,
      category: "Herbal Medicine",
      thumbnail:
        "https://images.unsplash.com/photo-1512290900670-c5221976037a?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Grass-Fed Organic Lean Meat Cut",
      description:
        "High-protein grass-fed quality meat checked for ultimate safety, health, and standard nutrition.",
      price: 155.0,
      rating: 4.7,
      category: "Fishes & meats",
      thumbnail:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.products && data.products.length > 0) {
          const formattedProducts = data.products.slice(0, 7).map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            rating: item.rating,
            category: item.category,
            thumbnail: item.thumbnail || item.images[0],
          }));
          setHotProducts(formattedProducts);
        } else {
          setHotProducts(fallbackProducts);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Fetch Error, using fallback:", err);
        setHotProducts(fallbackProducts);
        setLoading(false);
      });

    const updateIndexBasedOn24Hours = () => {
      const now = new Date().getTime();
      const oneDayMs = 24 * 60 * 60 * 1000;
      const dayCount = Math.floor(now / oneDayMs);
      setCurrentProductIndex(dayCount % 7);
    };

    updateIndexBasedOn24Hours();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const millisTillEnd =
        new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + 1,
          0,
          0,
          0,
        ) - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      setTime({
        days: 0,
        hours: Math.floor((millisTillEnd % day) / hour),
        minutes: Math.floor((millisTillEnd % hour) / minute),
        seconds: Math.floor((millisTillEnd % minute) / second),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const activeProduct =
    hotProducts.length > 0
      ? hotProducts[currentProductIndex]
      : fallbackProducts[currentProductIndex];

  return (
    <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-5 flex justify-center w-full">
            {loading && hotProducts.length === 0 ? (
              <div className="w-full max-w-md h-80 bg-gray-200 animate-pulse rounded-3xl flex items-center justify-center">
                <p className="text-gray-500 font-Nunito">Loading product...</p>
              </div>
            ) : (
              <Link
                to={`/product/${activeProduct.id}`}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 w-full max-w-md relative group text-center block cursor-pointer transition-all duration-300 hover:border-[#80B500]/50 hover:shadow-xl"
              >
                <span className="absolute top-4 left-4 bg-[#80B500] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Hot Deal (Daily)
                </span>

                <div className="h-60 sm:h-72 w-full overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={activeProduct.thumbnail}
                    alt={activeProduct.title}
                    className="w-full h-full object-contain group-hover:scale-105 duration-300"
                  />
                </div>

                <div className="mt-6 text-left">
                  <span className="text-xs uppercase font-bold text-[#80B500] tracking-wider">
                    {activeProduct.category}
                  </span>
                  <h4 className="text-Primary font-Inter font-bold text-base sm:text-lg mt-1 truncate group-hover:text-[#80B500] transition-colors">
                    {activeProduct.title}
                  </h4>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#80B500] font-bold text-xl sm:text-2xl font-Inter">
                      ${activeProduct.price}
                    </span>
                    <span className="text-xs text-gray-400 font-Nunito">
                      Rating: {activeProduct.rating} / 5
                    </span>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Right Side: Text & Countdown Timer */}
          <div className="lg:col-span-7 lg:pl-6 text-center lg:text-left">
            <h4 className="text-[#80B500] text-sm sm:text-base font-Nunito font-bold">
              Todays Hot Deals
            </h4>

            <Link to={`/product/${activeProduct.id}`}>
              <h3 className="text-Primary text-2xl sm:text-3xl lg:text-[50px] font-Inter font-bold leading-snug sm:leading-tight lg:leading-[60px] mt-2 hover:text-[#80B500] transition-colors duration-200 cursor-pointer">
                {activeProduct.title}
              </h3>
            </Link>

            <p className="text-[#546375] text-sm sm:text-base font-Nunito w-full lg:w-[450px] xl:w-[450px] leading-relaxed mt-4 sm:mt-5 mx-auto lg:mx-0">
              {activeProduct.description}
            </p>

            {/* Countdown Boxes */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-x-10 mt-8 sm:mt-10">
              {[
                { value: time.days, label: "Days" },
                { value: time.hours, label: "Hours" },
                { value: time.minutes, label: "Minutes" },
                { value: time.seconds, label: "Seconds" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white hover:bg-[#80B500] text-[#80B500] hover:text-white duration-200 w-14 h-14 sm:w-15 sm:h-15 flex items-center justify-center rounded-full text-base sm:text-[18px] font-Nunito font-bold shadow-sm">
                    {item.value}
                  </div>
                  <h4 className="text-[#223645] text-xs sm:text-base font-Inter mt-1">
                    {item.label}
                  </h4>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5">
              <Link to={`/product/${activeProduct.id}`}>
                <Button
                  btnTxt={"Shop Now"}
                  className="hover:bg-transparent hover:text-[#80B500] duration-200 w-full sm:w-auto"
                />
              </Link>

              <Link to={`/product/${activeProduct.id}`}>
                <Button
                  btnTxt={"Deal of The Day"}
                  className="hover:bg-transparent hover:text-[#80B500] duration-200 w-full sm:w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TodaysHotDeals;
