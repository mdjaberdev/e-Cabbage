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
  
    </section>
  );
};

export default Contacts;
