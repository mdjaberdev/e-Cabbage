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
    <div className="my-28">
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
            Product Facilities
          </h3>

          <p
            className="
          text-[#546375] 
          text-base 
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
        flex 
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-10
        mt-10
        "
        >
          {/* Left Side */}

          <div className="flex flex-col gap-8 order-2 lg:order-1">
            {leftFacilities.map((item, index) => (
              <div key={index} className="flex items-center gap-x-4">
                <Images srcImg={item.img} />

                <div>
                  <h4
                    className="
                    text-Primary 
                    text-[20px]
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
                    text-base 
                    font-Nunito 
                    leading-5 
                    w-full
                    lg:w-60
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

          <div className="order-1 lg:order-2">
            <Images srcImg={ProfacilitiesImg} className="w-full" />
          </div>

          {/* Right Side */}

          <div className="flex flex-col gap-8 order-3">
            {rightFacilities.map((item, index) => (
              <div
                key={index}
                className="
                flex 
                items-center 
                gap-x-4
                "
              >
                <div className="text-right">
                  <h4
                    className="
                    text-Primary 
                    text-[20px]
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
                    text-base 
                    font-Nunito 
                    leading-5 
                    w-full
                    lg:w-60
                    "
                  >
                    Est ante in nibh mauris. Ullamcor morbi tincidunt ornare
                    massa
                  </p>
                </div>

                <Images srcImg={item.img} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductsFacilities;
