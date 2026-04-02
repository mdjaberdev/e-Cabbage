import React from "react";
import Container from "../common/Container";
import { FaAngleRight } from "react-icons/fa";
import Images from "../common/Images";
import aboutOne from "/src/assets/aboutOne.png";
import memberOne from "/src/assets/teamMemberOne.png";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import client from '/src/assets/clientTastm.png'
import NextArrow from "../common/NextArrow";
import PreveArrow from "../common/PreveArrow";
import Slider from "react-slick";
import NextArrowTwo from "../common/NextArrowTwo";
import PreveArrowTwo from "../common/PreveArrowTwo";


const About = () => {
   var settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
      nextArrow: <NextArrowTwo/>,
      prevArrow: <PreveArrowTwo />,
   };
  return (
    <section className="">
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-37.5">
        <Container>
          <div className="">
            <h3 className="text-Primary text-[55px] font-bold font-Inter">
              About us
            </h3>
            <h5 className="text-[#133344] text-[18px] font-Nunito flex items-center">
              Home <FaAngleRight /> About us
            </h5>
          </div>
        </Container>
      </div>
      <Container>
        <div className="my-[120px] flex gap-x-[71px]">
          <div className="">
            <h5 className="text-[#80B500] text-lg font-Nunito font-bold">
              Know More About Shop
            </h5>
            <h3 className="text-Primary text-[50px] font-Inter font-bold w-[528px] leading-[61px] pt-2">
              Trusted Organic Food Store For People
            </h3>
            <p className="text-[#546375] text-lg font-Nunito w-[528px] pt-[35px]">
              Buy natural, sustainable and chemicalfree products from local the
              country. We are a strong community of 100,000+
            </p>
            <p className="text-[#546375] text-lg font-Nunito w-[540px] pt-[22px]">
              sellers who aspire to be good, do good, and spread goodness. We
              democratic, self-sustaining, two-sided marketplace which thrives
              on trust and is built on community and quality content.
            </p>
            <h4 className="text-Primary text-base font-bold italic font-Inter pt-[29px]">
              Jerry Henson
            </h4>
            <h6 className="text-[#808B94] text-[12px] font-Nunito">
              / Shop Director
            </h6>
          </div>
          <div className="flex gap-x-10">
            <Images srcImg={aboutOne} />
            <Images srcImg={aboutOne} className={"mt-20"} />
          </div>
        </div>
      </Container>
      <div className="bg-[url('/src/assets/aboutPgvideo.png')] bg-no-repeat bg-cover bg-center py-[165px]"></div>
      <Container>
        <div className="mt-[106px] mb-[124px] text-center">
          <h3 className="text-Primary text-[48px] font-Inter font-bold">
            Team Member
          </h3>
          <p className="text-[#546375] text-base font-Nunito pt-5">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
          <div className="mt-[55px] flex justify-center gap-x-[79px]">
            <div className="">
              <Images srcImg={memberOne} className={"mx-auto"} />
              <h4 className="text-Primary tet-[28px] font-Inter font-bold pt-5">
                John Abraham
              </h4>
              <p className="text-[#80B500] text-xl font-Nunito pb-[19px]">
                Consultant
              </p>
              <div className="p-3 inline-block bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white">
                <FaTwitter className="" />
              </div>
              <div className="p-3 inline-block bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white ml-2.5">
                <FaFacebookF className="" />
              </div>
              <div className="p-3 inline-block bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white ml-2.5">
                <FaInstagram className="" />
              </div>
              <div className="p-3 inline-block bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white ml-2.5">
                <FaTwitter className="" />
              </div>
            </div>
            <div className="">
              <Images srcImg={memberOne} className={"mx-auto"} />
              <h4 className="text-Primary tet-[28px] font-Inter font-bold pt-5">
                John Abraham
              </h4>
              <p className="text-[#80B500] text-xl font-Nunito pb-[19px]">
                Organizer
              </p>
              <div className="p-3 inline-block bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white">
                <FaTwitter className="" />
              </div>
              <div className="p-3 inline-block bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white ml-2.5">
                <FaFacebookF className="" />
              </div>
              <div className="p-3 inline-block bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white ml-2.5">
                <FaInstagram className="" />
              </div>
              <div className="p-3 inline-block bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white ml-2.5">
                <FaTwitter className="" />
              </div>
            </div>
            <div className="">
              <Images srcImg={memberOne} className={"mx-auto"} />
              <h4 className="text-Primary tet-[28px] font-Inter font-bold pt-5">
                John Abraham
              </h4>
              <p className="text-[#80B500] text-xl font-Nunito pb-[19px]">
                Manager
              </p>
              <div className="p-3 inline-block bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white">
                <FaTwitter className="" />
              </div>
              <div className="p-3 inline-block bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white ml-2.5">
                <FaFacebookF className="" />
              </div>
              <div className="p-3 inline-block bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white ml-2.5">
                <FaInstagram className="" />
              </div>
              <div className="p-3 inline-block bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white ml-2.5">
                <FaTwitter className="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-[#f7f5eb] py-[110px]">
        <Container>
          <div className="text-center">
            <h3 className="text-Primary text-[48px] font-bold font-Inter">
              Client Testimonial
            </h3>
            <p className="text-[#546375] text-base font-Nunito pt-[19px]">
              A highly efficient slip-ring scanner for today's diagnostic
              requirements.
            </p>
          </div>
          <div className=" about testmonial">
            <Slider {...settings}>
              <div className="w-[890px] bg-white pt-10 pb-[105px] mx-auto shadow-[0_5px_40px_0_rgba(12,0,46,0.102)] text-center mt-[55px]">
                <Images srcImg={client} className={"mx-auto"} />
                <h4 className="text-[#222D39] text-lg font-bold font-Inter pt-[30px]">
                  Lurch Schpellchek
                </h4>
                <h5 className="text-[#959CB1] text-sm font-Nunito">
                  UI/UX designer
                </h5>
                <p className="text-[#5C727D] text-base font-Nunito px-[260px] leading-[22px] pt-[24px]">
                  What a load of rubbish bits and bobs pear shaped owt to do
                  with me bubble and squeak jolly good morish tinkety tonk old
                  fruit, car boot my good sir buggered plastered cheeky David,
                  haggle young delinquent say so I said bite your arm off easy
                  peasy. Skive off it's all gone to pot buggered.
                </p>
              </div>
              {/* Two  */}
              <div className="w-[890px] bg-white pt-10 pb-[105px] mx-auto shadow-[0_5px_40px_0_rgba(12,0,46,0.102)] text-center mt-[55px]">
                <Images srcImg={client} className={"mx-auto"} />
                <h4 className="text-[#222D39] text-lg font-bold font-Inter pt-[30px]">
                  Lurch Schpellchek
                </h4>
                <h5 className="text-[#959CB1] text-sm font-Nunito">
                  UI/UX designer
                </h5>
                <p className="text-[#5C727D] text-base font-Nunito px-[260px] leading-[22px] pt-[24px]">
                  What a load of rubbish bits and bobs pear shaped owt to do
                  with me bubble and squeak jolly good morish tinkety tonk old
                  fruit, car boot my good sir buggered plastered cheeky David,
                  haggle young delinquent say so I said bite your arm off easy
                  peasy. Skive off it's all gone to pot buggered.
                </p>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
