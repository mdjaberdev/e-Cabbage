import React from "react";
import Container from "../common/Container";
import { FaAngleRight } from "react-icons/fa";
import Images from "../common/Images";
import phone from "../../assets/cpnIcon.png";
import bnrLogo from "../../assets/bannerLogo.png";
import { FaRegUser, FaMessage } from "react-icons/fa6";
import Button from "../common/Button";
import { MdMailOutline, MdOutlineWifiCalling3 } from "react-icons/md";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Cabbage Contact - Get in Touch</title>
        <meta name="contact" content="welcome to contact page" />
      </Helmet>
      <section className="overflow-hidden">
        {/* Banner Section */}
        <div className="relative bg-[#F6F9F0] pt-10 pb-12 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden select-none border-b border-[#80B500]/15">
          <div className="absolute top-[-20%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#80B500]/15 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none -z-10" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#E2ECD5]/70 rounded-full blur-[90px] sm:blur-[110px] pointer-events-none -z-10" />

          <Container>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">
              {/* Left Content */}
              <div className="w-full lg:w-[60%] text-center lg:text-left z-10">
                <div className="inline-flex items-center gap-x-2 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full shadow-sm border border-[#80B500]/30 mb-4 sm:mb-5">
                  <img
                    src={bnrLogo}
                    alt="Logo"
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-[#80B500] text-[11px] sm:text-sm font-bold font-Nunito uppercase tracking-wider">
                    We'd Love To Hear From You
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gray-900 font-Inter font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3 sm:mb-4">
                  Get in Touch With Our Organic Team
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-base font-Nunito max-w-[540px] mb-6 sm:mb-8 mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
                  Have questions about our fresh organic produce, herbal
                  remedies, or delivery schedules? Reach out to us anytime and
                  we will respond promptly.
                </p>

                {/* Breadcrumb Navigation */}
                <div className="inline-flex items-center gap-2 text-gray-600 text-xs sm:text-sm font-Nunito font-medium bg-white/80 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gray-200/80 shadow-sm mx-auto lg:mx-0">
                  <Link
                    to="/"
                    className="hover:text-[#80B500] transition-colors"
                  >
                    Home
                  </Link>
                  <FaAngleRight className="text-xs text-[#80B500]" />
                  <span className="text-gray-900 font-bold">Contact Us</span>
                </div>
              </div>

              {/* Right Quick Info Card */}
              <div className="w-full lg:w-[38%] z-10">
                <div className="bg-white/90 backdrop-blur-xl p-5 sm:p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-white flex flex-col gap-4 sm:gap-5">
                  <h3 className="text-gray-900 font-Inter font-bold text-base sm:text-lg border-b border-gray-100 pb-3">
                    Customer Support Hub
                  </h3>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-lg sm:text-xl shadow-sm">
                      <MdOutlineWifiCalling3 />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-xs sm:text-sm font-Inter">
                        24/7 Helpline
                      </h4>
                      <p className="text-gray-500 text-[11px] sm:text-xs font-Nunito">
                        (210) 123 451 (Head Office)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-lg sm:text-xl shadow-sm">
                      <MdMailOutline />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-xs sm:text-sm font-Inter">
                        Quick Response Email
                      </h4>
                      <p className="text-gray-500 text-[11px] sm:text-xs font-Nunito">
                        webecyenvato12@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-lg sm:text-xl shadow-sm">
                      <FaAngleRight />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-xs sm:text-sm font-Inter">
                        Fast Resolution
                      </h4>
                      <p className="text-gray-500 text-[11px] sm:text-xs font-Nunito">
                        Average response time within 2 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Content Section */}
        <div className="my-16 md:my-[120px]">
          <Container>
            <div className="shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] bg-white py-10 px-6 sm:px-10 md:py-[110px] md:px-[70px] flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 rounded-xl">
              <div className="w-full lg:w-[397px]">
                <h4 className="text-Primary text-[32px] md:text-[42px] font-bold font-Inter leading-[38px] md:leading-[51px]">
                  Feel free to contact us for any query.
                </h4>
                <div className="space-y-[30px] md:space-y-[37px] mt-[40px] md:mt-[50px]">
                  {/* Phone Number */}
                  <div className="flex items-center gap-x-[18px]">
                    <div className="p-4 md:p-[20px] bg-[#80B500] rounded-full inline-block shrink-0">
                      <Images
                        srcImg={phone}
                        className="w-5 h-5 md:w-auto md:h-auto"
                      />
                    </div>
                    <div>
                      <h5 className="text-Primary text-[15px] font-Inter font-bold">
                        Phone Number:
                      </h5>
                      <p className="text-[#666E77] text-sm md:text-base font-Nunito">
                        Head office: (210) 123 451
                      </p>
                    </div>
                  </div>

                  {/* Mail Address */}
                  <div className="flex items-center gap-x-[18px]">
                    <div className="p-4 md:p-[20px] bg-[#80B500] rounded-full inline-block shrink-0">
                      <Images
                        srcImg={phone}
                        className="w-5 h-5 md:w-auto md:h-auto"
                      />
                    </div>
                    <div>
                      <h5 className="text-Primary text-[15px] font-Inter font-bold">
                        Mail Address:
                      </h5>
                      <p className="text-[#666E77] text-sm md:text-base font-Nunito break-all">
                        webecyenvato12@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex items-center gap-x-[18px]">
                    <div className="p-4 md:p-[20px] bg-[#80B500] rounded-full inline-block shrink-0">
                      <Images
                        srcImg={phone}
                        className="w-5 h-5 md:w-auto md:h-auto"
                      />
                    </div>
                    <div>
                      <h5 className="text-Primary text-[15px] font-Inter font-bold">
                        Office Address:
                      </h5>
                      <p className="text-[#666E77] text-sm md:text-base font-Nunito">
                        254 Lillian Blvd, Holbrook
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:flex-1">
                {/* First Name & Last Name */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-[14px]">
                  <div className="w-full py-[14px] px-[17px] bg-[#F5F5F7] border-2 border-[#F5F5F7] duration-500 focus-within:border-2 focus-within:border-[#80B500] flex items-center justify-between group rounded-md">
                    <input
                      type="text"
                      className="w-full text-Primary text-base font-Nunito outline-0 bg-transparent"
                      placeholder="First Name*"
                    />
                    <FaRegUser className="text-gray-400 group-focus-within:text-[#80B500] shrink-0" />
                  </div>
                  <div className="w-full py-[14px] px-[17px] bg-[#F5F5F7] border-2 border-[#F5F5F7] duration-500 focus-within:border-2 focus-within:border-[#80B500] flex items-center justify-between group rounded-md">
                    <input
                      type="text"
                      className="w-full text-Primary text-base font-Nunito outline-0 bg-transparent"
                      placeholder="Last Name*"
                    />
                    <FaRegUser className="text-gray-400 group-focus-within:text-[#80B500] shrink-0" />
                  </div>
                </div>

                {/* Email & Phone Number */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-[14px] mt-4 sm:mt-[40px]">
                  <div className="w-full py-[14px] px-[17px] bg-[#F5F5F7] border-2 border-[#F5F5F7] duration-500 focus-within:border-2 focus-within:border-[#80B500] flex items-center justify-between group rounded-md">
                    <input
                      type="email"
                      className="w-full text-Primary text-base font-Nunito outline-0 bg-transparent"
                      placeholder="Mail Address"
                    />
                    <MdMailOutline className="text-gray-400 group-focus-within:text-[#80B500] text-lg shrink-0" />
                  </div>
                  <div className="w-full py-[14px] px-[17px] bg-[#F5F5F7] border-2 border-[#F5F5F7] duration-500 focus-within:border-2 focus-within:border-[#80B500] flex items-center justify-between group rounded-md">
                    <input
                      type="text"
                      className="w-full text-Primary text-base font-Nunito outline-0 bg-transparent"
                      placeholder="Phone Number"
                    />
                    <MdOutlineWifiCalling3 className="text-gray-400 group-focus-within:text-[#80B500] text-lg shrink-0" />
                  </div>
                </div>

                {/* Select Product Dropdown */}
                <div className="py-[14px] px-[17px] bg-[#F5F5F7] border-2 border-[#F5F5F7] focus-within:border-[#80B500] my-4 sm:my-10 rounded-md transition-all">
                  <select className="w-full outline-0 bg-transparent text-Primary text-base font-Nunito cursor-pointer">
                    <option className="text-Primary text-base font-Nunito">
                      Choose Product
                    </option>
                    <option className="text-Primary text-base font-Nunito">
                      Product Option 2
                    </option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="py-[14px] px-[17px] bg-[#F5F5F7] border-2 border-[#F5F5F7] focus-within:border-[#80B500] flex justify-between items-start h-[160px] md:h-[200px] rounded-md transition-all group">
                  <textarea
                    className="w-full h-full outline-0 text-Primary text-base font-Nunito resize-none bg-transparent"
                    placeholder="Enter Message"
                  ></textarea>
                  <FaMessage className="text-gray-400 group-focus-within:text-[#80B500] mt-1 shrink-0" />
                </div>

                {/* Submit Button */}
                <div className="mt-8 sm:mt-10">
                  <Button btnTxt={"Submit Request"} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Contacts;
