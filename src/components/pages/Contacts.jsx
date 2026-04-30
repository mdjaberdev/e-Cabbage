import React from "react";
import Container from "../common/Container";
import { FaAngleRight } from "react-icons/fa";
import Images from "../common/Images";
import phone from "../../assets/cpnIcon.png";
import { FaRegUser, FaMessage } from "react-icons/fa6";
import Button from "../common/Button";
import { MdMailOutline, MdOutlineWifiCalling3 } from "react-icons/md";

const Contacts = () => {
  return (
    <section>
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-37.5">
        <Container>
          <div className="">
            <h3 className="text-Primary text-[55px] font-bold font-Inter">
              Contact Us
            </h3>
            <h5 className="text-[#133344] text-[18px] font-Nunito flex items-center">
              Home <FaAngleRight /> Contact
            </h5>
          </div>
        </Container>
      </div>
      <div className="my-[120px]">
        <Container>
          <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-white py-[110px] px-[70px] flex justify-between">
            <div className="w-[397px]">
              <h4 className="text-Primary text-[42px] font-bold font-Inter leading-[51px]">
                Feel free to contact us for any query.
              </h4>
              <div className="space-y-[37px] mt-[50px]">
                {/* Phone Number:  */}
                <div className="flex items-center gap-x-[18px]">
                  <div className="p-[20px] bg-[#80B500] rounded-full inline-block">
                    <Images srcImg={phone} />
                  </div>
                  <div className="">
                    <h5 className="text-Primary text-[15px] font-Inter font-bold">
                      Phone Number:
                    </h5>
                    <p className="text-[#666E77] text-base font-Nunito">
                      Head office: (210) 123 451
                    </p>
                  </div>
                </div>
                {/* Mail Address:  */}
                <div className="flex items-center gap-x-[18px]">
                  <div className="p-[20px] bg-[#80B500] rounded-full inline-block">
                    <Images srcImg={phone} />
                  </div>
                  <div className="">
                    <h5 className="text-Primary text-[15px] font-Inter font-bold">
                      Mail Address:
                    </h5>
                    <p className="text-[#666E77] text-base font-Nunito">
                      webecyenvato12@gmail.com
                    </p>
                  </div>
                </div>
                {/* Office Address:  */}
                <div className="flex items-center gap-x-[18px]">
                  <div className="p-[20px] bg-[#80B500] rounded-full inline-block">
                    <Images srcImg={phone} />
                  </div>
                  <div className="">
                    <h5 className="text-Primary text-[15px] font-Inter font-bold">
                      Office Address:
                    </h5>
                    <p className="text-[#666E77] text-base font-Nunito">
                      254 Lillian Blvd, Holbrook
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-x-[14px]">
                {/* First Name  */}
                <div className="py-[14px] px-[17px] bg-[#F5F5F7] border-2 border-[#F5F5F7] duration-500 focus-within:border-2 focus-within:border-[#80B500] flex justify-between group">
                  <input
                    type="text"
                    className="w-[265px] text-Primary text-base font-Nunito outline-0 bg-transparent"
                    placeholder="First Name*"
                  />
                  <FaRegUser className="group-focus-within:text-[#80B500]" />
                </div>
                {/* Last Name  */}
                <div className="py-[14px] px-[17px] bg-[#F5F5F7] border-2 border-[#F5F5F7] duration-500 focus-within:border-2 focus-within:border-[#80B500] flex justify-between group">
                  <input
                    type="text"
                    className="w-[265px] text-Primary text-base font-Nunito outline-0 bg-transparent"
                    placeholder="Last Name*"
                  />
                  <FaRegUser className="group-focus-within:text-[#80B500]" />
                </div>
              </div>
              <div className="flex gap-x-[14px] mt-[40px]">
                {/* Mail Address  */}
                <div className="py-[14px] px-[17px] bg-[#F5F5F7] border-2 border-[#F5F5F7] duration-500 focus-within:border-2 focus-within:border-[#80B500] flex justify-between group">
                  <input
                    type="text"
                    className="w-[265px] text-Primary text-base font-Nunito outline-0 bg-transparent"
                    placeholder="Mail Address"
                  />
                  <MdMailOutline className="group-focus-within:text-[#80B500]" />
                </div>
                {/* Phone Number  */}
                <div className="py-[14px] px-[17px] bg-[#F5F5F7] border-2 border-[#F5F5F7] duration-500 focus-within:border-2 focus-within:border-[#80B500] flex justify-between group">
                  <input
                    type="text"
                    className="w-[265px] text-Primary text-base font-Nunito outline-0 bg-transparent"
                    placeholder="Phone Number"
                  />
                  <MdOutlineWifiCalling3 className="group-focus-within:text-[#80B500]" />
                </div>
              </div>
              <div className="py-[14px] px-[17px] bg-[#F5F5F7] my-10 ">
                <select className="w-full outline-0">
                  <option className="text-Primary text-base font-Nunito">
                    Choose Product
                  </option>
                  <option className="text-Primary text-base font-Nunito">
                    Choose Product
                  </option>
                </select>
              </div>
              <div className="py-[14px] px-[17px] bg-[#F5F5F7] flex justify-between h-[200px]">
                <textarea
                  className="w-full outline-0 text-Primary text-base "
                  placeholder="Enter Messege"
                ></textarea>
                <FaMessage />
              </div>
              <div className="mt-10">
                <Button btnTxt={"Submit Request"} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Contacts;
