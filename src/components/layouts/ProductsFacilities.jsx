import React from "react";
import ProfacilitiesImg from "/src/assets/productsFacilitiesImg.png";
import ProfacilitiesOne from "/src/assets/productsFacilitiesOne.png";
import ProfacilitiesTwo from "/src/assets/productsFacilitiesTwo.png";
import ProfacilitiesThree from "/src/assets/productsFacilitiesThree.png";
import ProfacilitiesFour from "/src/assets/productsFacilitieFour.png";
import ProfacilitiesFive from "/src/assets/productsFacilitiesFive.png";
import ProfacilitiesSix from "/src/assets/productsFacilitiesSix.png";
import Container from "../common/Container";
import Images from "../common/Images";

const ProductsFacilities = () => {
  const leftFacilities = [
    {
      img: ProfacilitiesOne,
      title: "Eat Healthy Food",
    },
    {
      img: ProfacilitiesTwo,
      title: "Pesticide Free",
    },
    {
      img: ProfacilitiesThree,
      title: "Sweet Exotic Food",
    },
  ];

  const rightFacilities = [
    {
      img: ProfacilitiesFour,
      title: "Order Flexibility",
    },
    {
      img: ProfacilitiesFive,
      title: "Livestock Product",
    },
    {
      img: ProfacilitiesSix,
      title: "Variety & Selection",
    },
  ];

  return (
    <div className="my-16 sm:my-20 lg:my-28">
      <Container>
        {/* Section Header */}
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
            Product Facilities
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

        {/* Main Content Grid/Flex */}
        <div
          className="
            flex 
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-8
            lg:gap-10
            mt-10
            lg:mt-12
          "
        >
          {/* Left Side Facilities */}
          <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1 w-full lg:w-auto">
            {leftFacilities.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-x-4 text-left justify-start"
              >
                <div className="shrink-0">
                  <Images
                    srcImg={item.img}
                    className="w-12 h-12 sm:w-auto sm:h-auto object-contain"
                  />
                </div>

                <div>
                  <h4
                    className="
                      text-Primary 
                      text-lg
                      lg:text-[22px] 
                      font-bold 
                      font-Inter
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      text-[#666E77] 
                      text-sm
                      lg:text-base 
                      font-Nunito 
                      leading-relaxed 
                      w-full
                      lg:w-60
                      mt-1
                    "
                  >
                    Est ante in nibh mauris. Ullamcor morbi tincidunt ornare
                    massa
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="order-1 lg:order-2 w-full max-w-sm lg:max-w-none flex justify-center">
            <Images
              srcImg={ProfacilitiesImg}
              className="w-full object-contain"
            />
          </div>

          {/* Right Side Facilities */}
          <div className="flex flex-col gap-6 lg:gap-8 order-3 w-full lg:w-auto">
            {rightFacilities.map((item, index) => (
              <div
                key={index}
                className="
                  flex 
                  items-center 
                  gap-x-4
                  justify-between
                  lg:justify-end
                "
              >
                {/* Text for desktop will be right-aligned */}
                <div className="text-left lg:text-right order-2 lg:order-1">
                  <h4
                    className="
                      text-Primary 
                      text-lg
                      lg:text-[22px] 
                      font-bold 
                      font-Inter
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      text-[#666E77] 
                      text-sm
                      lg:text-base 
                      font-Nunito 
                      leading-relaxed 
                      w-full
                      lg:w-60
                      mt-1
                    "
                  >
                    Est ante in nibh mauris. Ullamcor morbi tincidunt ornare
                    massa
                  </p>
                </div>

                {/* Image */}
                <div className="shrink-0 order-1 lg:order-2">
                  <Images
                    srcImg={item.img}
                    className="w-12 h-12 sm:w-auto sm:h-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default  ProductsFacilities;
