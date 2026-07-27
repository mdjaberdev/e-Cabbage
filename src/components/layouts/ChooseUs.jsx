import React from "react";
import cOne from "/src/assets/chooseOne.png";
import cTwo from "/src/assets/chooseTwo.png";
import cThree from "/src/assets/chooseThree.png";
import cFour from "/src/assets/chooseFour.png";

import Container from "../common/Container";
import Images from "../common/Images";

const ChooseUs = () => {
  const cards = [
    {
      img: cOne,
      title: "100% Fresh & Natural",
      description:
        "We source our products directly from trusted organic farms to ensure absolute freshness, premium quality, and natural nutrition for your daily diet.",
    },
    {
      img: cTwo,
      title: "Safe & Fast Delivery",
      description:
        "Experience quick and reliable doorstep delivery. Our temperature-controlled packaging ensures your items stay fresh and secure all the way.",
    },
    {
      img: cThree,
      title: "Certified Organic",
      description:
        "All our items go through strict quality checks and are 100% certified organic, free from harmful chemical pesticides and artificial preservatives.",
    },
    {
      img: cFour,
      title: "24/7 Friendly Support",
      description:
        "Have questions about your order or products? Our dedicated customer support team is always here to assist you around the clock.",
    },
  ];

  return (
    <section
      className="
        bg-[url('/src/assets/chooseBanner.png')]
        bg-no-repeat
        bg-cover
        bg-center
        py-16
        sm:py-20
        lg:py-32
        relative
        overflow-hidden
      "
    >
      {/* Optional Dark Overlay for better text contrast if background is bright */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <span className="inline-block bg-[#F4F9EB] text-[#80B500] font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-3 shadow-sm border border-[#80B500]/20">
            Our Core Values
          </span>
          <h2
            className="
              text-[#1A202C]
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-extrabold
              font-Inter
              tracking-tight
            "
          >
            Why Choose Us
          </h2>

          <p
            className="
              text-[#546375]
              text-sm
              sm:text-base
              font-Rubik
              mt-3
              sm:mt-4
              leading-relaxed
            "
          >
            Discover the core benefits that make us your favorite destination
            for fresh, organic, and healthy grocery shopping.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
            lg:gap-8
            mt-12
            sm:mt-16
            lg:mt-20
            justify-center
          "
        >
          {cards.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white/90
                backdrop-blur-md
                p-6
                sm:p-8
                lg:p-10
                hover:bg-[#80B500]
                transition-all
                duration-400
                rounded-2xl
                shadow-md
                hover:shadow-2xl
                border
                border-slate-100/80
                hover:border-[#80B500]
                transform
                hover:-translate-y-1.5
              "
            >
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-5
                  sm:gap-6
                  items-center
                  sm:items-start
                  text-center
                  sm:text-left
                "
              >
                {/* Image Wrapper with Modern Box */}
                <div 
                  className="
                    shrink-0 
                    w-16 
                    h-16 
                    sm:w-20 
                    sm:h-20 
                    bg-[#F4F9EB] 
                    group-hover:bg-white/20 
                    rounded-2xl 
                    flex 
                    items-center 
                    justify-center 
                    transition-colors 
                    duration-300
                    shadow-sm
                  "
                >
                  <Images 
                    srcImg={item.img} 
                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>

                {/* Text Content */}
                <div className="w-full">
                  <h4
                    className="
                      text-[#1A202C]
                      group-hover:text-white
                      text-xl
                      lg:text-[22px]
                      font-Inter
                      font-bold
                      transition-colors
                      duration-300
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      text-[#5C727D]
                      group-hover:text-white/90
                      text-sm
                      lg:text-base
                      font-Nunito
                      w-full
                      lg:w-[380px]
                      leading-relaxed
                      mt-2.5
                      transition-colors
                      duration-300
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ChooseUs;