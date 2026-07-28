import React from "react";
import Container from "../common/Container";
import { FaAngleRight } from "react-icons/fa";
import Images from "../common/Images";
import phone from "../../assets/cpnIcon.png";
import { FaRegUser, FaMessage } from "react-icons/fa6";
import Button from "../common/Button";
import { MdMailOutline, MdOutlineWifiCalling3 } from "react-icons/md";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Cabbage Contact</title>
        <meta name="contact" content="welcome to contact page" />
      </Helmet>
      <section className="overflow-hidden">
        {/* Banner Section */}
        <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-24 lg:py-36">
          <Container>
            <div>
              <h3 className="text-Primary text-4xl sm:text-5xl font-bold font-Inter">
                Contact Us
              </h3>
              <h5 className="text-[#133344] text-base sm:text-lg font-Nunito flex items-center gap-2 mt-2">
                <Link to="/" className="hover:text-[#80B500] transition-colors">
                  Home
                </Link>
                <FaAngleRight /> Contact
              </h5>
            </div>
          </Container>
        </div>

        {/* Main Content Section */}
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
