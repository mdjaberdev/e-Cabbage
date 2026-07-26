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
      py-20
      lg:py-28
    "
    >
      <Container>
        <div className="text-center">
          <h3
            className="
            text-Primary
            text-4xl
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
            mt-4
          "
          >
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-2
          gap-6
          lg:gap-x-10
          lg:gap-y-10
          mt-12
          lg:mt-20
          justify-center
        "
        >
          {cards.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                py-8
                px-6
                lg:py-10
                lg:px-15
                group
                hover:bg-[#80B500]
                duration-200
              "
            >
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  items-center
                "
              >
                <Images srcImg={item.img} className={"bg-white"} />

                <div>
                  <h4
                    className="
                      text-Primary
                      text-xl
                      lg:text-[22px]
                      font-Inter
                      font-bold
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
                      lg:w-86.25
                      leading-5
                      mt-2
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
