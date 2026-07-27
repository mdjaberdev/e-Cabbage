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
      title: "Eat More Healthfully",
    },
    {
      img: cTwo,
      title: "Eat More Healthfully",
    },
    {
      img: cThree,
      title: "Eat More Healthfully",
    },
    {
      img: cFour,
      title: "Eat More Healthfully",
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
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
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
                    Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                    tempor incididunt ut labore et
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
