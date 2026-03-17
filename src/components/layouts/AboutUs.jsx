import React from "react";
import aboutOne from "/src/assets/aboutOne.png";
import Container from "../common/Container";
import Images from "../common/Images";

const AboutUs = () => {
  return (
    <Container>
      <div className="flex justify-between my-20">
        <div className="flex gap-x-10">
          <Images srcImg={aboutOne} />
          <Images srcImg={aboutOne} className={"mt-20"} />
        </div>
        <div className="mt-20">
          <h4 className="text-[#80B500] text-[18px] font-Nunito font-bold">
            Know More About Shop
          </h4>
          <h3 className="text-Primary text-[50px] font-Inter font-bold leading-16 w-[528px]">
            Trusted Organic Food Store For People
          </h3>
          <div className="text-[#546375] text-[18px] font-Nunito leading-7 w-[528px] mt-5">
            <p>
              Buy natural, sustainable and chemicalfree products from local the
              country. We are a strong community of 100,000+
            </p>
              <p className="mt-7">
                sellers who aspire to be good, do good, and spread goodness. We
                democratic, self-sustaining, two-sided marketplace which thrives
                on trust and is built on community and quality content.
              </p>
          </div>
          <h4 className="text-[#223645] text-base font-bold font-Playfair mt-5">
            Jerry Henson
          </h4>
          <p className="text-[#808B94] text-[12px] font-Nunito">
            / Shop Director
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
