import React from "react";
import Container from "../common/Container";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Images from "../common/Images";
import footerLogo from "/src/assets/footerLogo.png";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../common/Button";
import fbb from "/src/assets/footerBB.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/footer.png')] bg-center bg-cover bg-no-repeat py-25">
        <Container>
          <div className="flex justify-between">
            <div className="">
              <h4 className="text-white text-[22px] font-bold font-Inter">
                About Us.
              </h4>
              <p className="text-white text-base font-Nunito leading-6 mt-4 w-[310px]">
                orporate clients and leisure travelers has been relying on
                Groundlink for dependable safe, and professional chauffeured car
                service in major cities across World. Indeed it has been more
                than one decade and five years that Groundlink
              </p>
              <div className="flex gap-x-2 mt-6">
                <div className="p-3 bg-white text-[#6A7695] rounded-full hover:bg-[#80B500] hover:text-white duration-200">
                  <Link>
                    <FaFacebookF />
                  </Link>
                </div>
                <div className="p-3 bg-white text-[#6A7695] rounded-full hover:bg-[#80B500] hover:text-white duration-200">
                  <Link>
                    <FaTwitter />
                  </Link>
                </div>
                <div className="p-3 bg-white text-[#6A7695] rounded-full hover:bg-[#80B500] hover:text-white duration-200">
                  <Link>
                    <FaVimeoV />
                  </Link>
                </div>
                <div className="p-3 bg-white text-[#6A7695] rounded-full hover:bg-[#80B500] hover:text-white duration-200">
                  <Link>
                    <FaPinterestP />
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <h4 className="text-white text-[22px] font-bold font-Inter">
                Useful Links
              </h4>
              <ul className="text-white text-base font-Nunito mt-4">
                <li>About</li>
                <li>News</li>
                <li>Partners</li>
                <li>Room Details</li>
                <li>Gallery</li>
                <li>Contacts</li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-white text-[22px] font-bold font-Inter">
                Help?
              </h4>
              <ul className="text-white text-base font-Nunito mt-4">
                <li>FAQ</li>
                <li>Term & conditions</li>
                <li>Reporting</li>
                <li>Documentation</li>
                <li>Support Policy</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className="">
              <Images srcImg={footerLogo} />
              <p className="text-white text-base font-Nunito leading-6 w-[330px] mt-4">
                We are a team of designers and developers create high quality
                Magento, Prestashop,
              </p>
              <h5 className="text-white text-base font-Nunito flex gap-x-1 items-center py-4">
                <IoLocationOutline /> 254 Lillian Blvd, Holbrook
              </h5>
              <div className="bg-white py-1 pr-1 pl-4 flex justify-between">
                <input
                  type="email"
                  placeholder=" Enter email address"
                  className="text-[#42518B] text-base font-Nunito outline-0"
                />
                <Button btnTxt={"Subscribe"} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#303441] -mt-1 py-5">
        <Container>
          <div className="flex items-center justify-between">
            <p className="text-white text-base font-Nunito">
              © TunaThemes 2024 All rights reserved.
            </p>
            <div className="flex gap-x-3">
              <Images srcImg={fbb} />
              <Images srcImg={fbb} />
              <Images srcImg={fbb} />
              <Images srcImg={fbb} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
