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
  return (
    <div className="my-28">
      <Container>
        <div className="text-center">
          <h3 className="text-Primary text-5xl font-bold font-Inter ">
            Product Facilities
          </h3>
          <p className="text-[#546375] text-base font-Rubik mt-4">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>
        <div className="flex gap-x-10 mt-10">
          <div className="">
            <div className="flex items-center">
              <Images srcImg={ProfacilitiesOne} />
              <div className="">
                <h4 className="text-Primary text-[22px] font-bold font-Inter">
                  Eat Healthy Food
                </h4>
                <p className="text-[#666E77] text-base font-Nunito leading-5 w-[240px]">
                  Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Images srcImg={ProfacilitiesTwo} />
              <div className="">
                <h4 className="text-Primary text-[22px] font-bold font-Inter">
                  Pesticide Free
                </h4>
                <p className="text-[#666E77] text-base font-Nunito leading-5 w-[240px]">
                  Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Images srcImg={ProfacilitiesThree} />
              <div className="">
                <h4 className="text-Primary text-[22px] font-bold font-Inter">
                  Sweet Exotic Food
                </h4>
                <p className="text-[#666E77] text-base font-Nunito leading-5 w-[240px]">
                  Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Images srcImg={ProfacilitiesImg} />
          </div>
          <div className="">
            <div className="flex items-center">
              <div className="text-end">
                <h4 className="text-Primary text-[22px] font-bold font-Inter">
                  Order Flexibility
                </h4>
                <p className="text-[#666E77] text-base font-Nunito leading-5 w-[240px]">
                  Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa
                </p>
              </div>
              <Images srcImg={ProfacilitiesFour} />
            </div>
            <div className="flex items-center">
              <div className="text-end">
                <h4 className="text-Primary text-[22px] font-bold font-Inter">
                  Livestock Product
                </h4>
                <p className="text-[#666E77] text-base font-Nunito leading-5 w-[240px]">
                  Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa
                </p>
              </div>
              <Images srcImg={ProfacilitiesFive} />
            </div>
            <div className="flex items-center">
              <div className="text-end">
                <h4 className="text-Primary text-[22px] font-bold font-Inter">
                  Variety & Selection
                </h4>
                <p className="text-[#666E77] text-base font-Nunito leading-5 w-[240px]">
                  Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa
                </p>
              </div>
              <Images srcImg={ProfacilitiesSix} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductsFacilities;
