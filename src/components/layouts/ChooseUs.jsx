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
    <div
      className="
        bg-[url('/src/assets/chooseBanner.png')]
        bg-no-repeat
        bg-cover
        bg-center
        py-12
        sm:py-16
        lg:py-28
      "
    >
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <h3
            className="
              text-Primary
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              font-Inter
            "
          >
            Why Choose Us
          </h3>

          <p
            className="
              text-[#546375]
              text-sm
              lg:text-base
              font-Rubik
              mt-3
              sm:mt-4
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
            lg:gap-x-10
            lg:gap-y-10
            mt-10
            sm:mt-12
            lg:mt-20
            justify-center
          "
        >
          {cards.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                py-6
                px-5
                sm:py-8
                sm:px-6
                lg:py-10
                lg:px-12
                group
                hover:bg-[#80B500]
                transition-all
                duration-200
                rounded-xl
                shadow-sm
                lg:shadow-none
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
                {/* Image Wrapper */}
                <div className="shrink-0">
                  <Images srcImg={item.img} className="bg-white" />
                </div>

                {/* Text Content */}
                <div className="w-full">
                  <h4
                    className="
                      text-Primary
                      group-hover:text-white
                      text-xl
                      lg:text-[22px]
                      font-Inter
                      font-bold
                      transition-colors
                      duration-200
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      text-[#5C727D]
                      group-hover:text-white
                      text-sm
                      lg:text-base
                      font-Nunito
                      w-full
                      lg:w-[345px]
                      leading-relaxed
                      mt-2
                      transition-colors
                      duration-200
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
    </div>
  );
};

export default ChooseUs;
