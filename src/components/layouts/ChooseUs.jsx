import React from "react";
import cOne from "/src/assets/chooseOne.png";
import cTwo from "/src/assets/chooseTwo.png";
import cThree from "/src/assets/chooseThree.png";
import cFour from "/src/assets/chooseFour.png";
import Container from "../common/Container";
import Images from "../common/Images";

const ChooseUs = () => {
  return (
    <div className="bg-[url('/src/assets/chooseBanner.png')] bg-no-repeat bg-cover bg-center py-28">
      <Container>
        <div className="text-center">
          <h3 className="text-Primary text-5xl font-bold font-Inter ">
            Why Choose Us
          </h3>
          <p className="text-[#546375] text-base font-Rubik mt-4">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>
        <div className="flex gap-x-10 mt-20 justify-center">
          <div className="bg-white py-10 px-15 group hover:bg-[#80B500] hover:text-white duration-200">
            <div className="flex gap-x-4 items-center">
              <Images srcImg={cOne} className={"bg-white"} />
              <div className="">
                <h4 className="text-Primary text-[22px] font-Inter font-bold">
                  Eat More Healthfully
                </h4>
                <p className="text-[#5C727D] group-hover:text-white text-base font-Nunito w-[345px] leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labore et
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white py-10 px-15 group hover:bg-[#80B500] hover:text-white duration-200">
            <div className="flex gap-x-4 items-center">
              <Images srcImg={cTwo} className={"bg-white"} />
              <div className="">
                <h4 className="text-Primary text-[22px] font-Inter font-bold">
                  Eat More Healthfully
                </h4>
                <p className="text-[#5C727D] group-hover:text-white text-base font-Nunito w-[345px] leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labore et
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-10 justify-center mt-10">
          <div className="bg-white py-10 px-15 group hover:bg-[#80B500] hover:text-white duration-200">
            <div className="flex gap-x-4 items-center">
              <Images srcImg={cThree} className={"bg-white"} />
              <div className="">
                <h4 className="text-Primary text-[22px] font-Inter font-bold">
                  Eat More Healthfully
                </h4>
                <p className="text-[#5C727D] group-hover:text-white text-base font-Nunito w-[345px] leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labore et
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white py-10 px-15 group hover:bg-[#80B500] hover:text-white duration-200">
            <div className="flex gap-x-4 items-center">
              <Images srcImg={cFour} className={"bg-white!"} />
              <div className="">
                <h4 className="text-Primary text-[22px] font-Inter font-bold">
                  Eat More Healthfully
                </h4>
                <p className="text-[#5C727D] group-hover:text-white text-base font-Nunito w-[345px] leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labore et
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseUs;
