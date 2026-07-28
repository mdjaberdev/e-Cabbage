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
      {/* Main Footer */}

      <div
        className="
        bg-[url('/src/assets/footer.png')]
        bg-center
        bg-cover
        bg-no-repeat
        py-12
        sm:py-16
        lg:py-25
      "
      >
        <Container>
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:flex
            lg:justify-between
            gap-y-10
            gap-x-8
          "
          >
            {/* About */}

            <div>
              <h4
                className="
                text-white
                text-xl
                lg:text-[22px]
                font-bold
                font-Inter
              "
              >
                About Us.
              </h4>

              <p
                className="
                text-white
                text-sm
                lg:text-base
                font-Nunito
                leading-6
                mt-3
                lg:mt-4
                w-full
                lg:w-77.5
              "
              >
                orporate clients and leisure travelers has been relying on
                Groundlink for dependable safe, and professional chauffeured car
                service in major cities across World.
              </p>

              <div
                className="
                flex
                gap-x-2
                mt-5
                lg:mt-6
              "
              >
                <Social icon={<FaFacebookF />} />

                <Social icon={<FaTwitter />} />

                <Social icon={<FaVimeoV />} />

                <Social icon={<FaPinterestP />} />
              </div>
            </div>

            {/* Useful Links */}

            <div>
              <h4
                className="
                text-white
                text-xl
                lg:text-[22px]
                font-bold
                font-Inter
              "
              >
                Useful Links
              </h4>

              <ul
                className="
                text-white
                text-sm
                lg:text-base
                font-Nunito
                mt-3
                lg:mt-4
                space-y-2
              "
              >
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>News</li>
                <li>Partners</li>
                <li>Room Details</li>
                <li>Gallery</li>

                <Link to={"/contact"}>Contacts</Link>
              </ul>
            </div>

            {/* Help */}

            <div>
              <h4
                className="
                text-white
                text-xl
                lg:text-[22px]
                font-bold
                font-Inter
              "
              >
                Help?
              </h4>

              <ul
                className="
                text-white
                text-sm
                lg:text-base
                font-Nunito
                mt-3
                lg:mt-4
                space-y-2
              "
              >
                <li>FAQ</li>
                <li>Term & conditions</li>
                <li>Reporting</li>
                <li>Documentation</li>
                <li>Support Policy</li>
                <li>Privacy</li>
              </ul>
            </div>

            {/* Newsletter */}

            <div>
              <Images srcImg={footerLogo} />

              <p
                className="
                text-white
                text-sm
                lg:text-base
                font-Nunito
                leading-6
                mt-3
                lg:mt-4
                w-full
                lg:w-82.5
              "
              >
                We are a team of designers and developers create high quality
                Magento, Prestashop,
              </p>

              <h5
                className="
                text-white
                text-sm
                lg:text-base
                font-Nunito
                flex
                gap-x-1
                items-center
                py-3
                lg:py-4
              "
              >
                <IoLocationOutline />
                254 Lillian Blvd, Holbrook
              </h5>

              <div
                className="
                bg-white
                py-1
                pr-1
                pl-4
                flex
                items-center
                justify-between
                w-full
              "
              >
                <input
                  type="email"
                  placeholder=" Enter email address"
                  className="
                    text-[#42518B]
                    text-sm
                    lg:text-base
                    font-Nunito
                    outline-0
                    w-full
                  "
                />

                <Button btnTxt={"Subscribe"} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Footer */}

      <div
        className="
        bg-[#303441]
        -mt-1
        py-5
      "
      >
        <Container>
          <div
            className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-y-5
          "
          >
            <p
              className="
              text-white
              text-sm
              lg:text-base
              font-Nunito
              text-center
            "
            >
              © TunaThemes 2024 All rights reserved.
            </p>

            <div
              className="
              flex
              gap-x-3
            "
            >
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

// Social Component

const Social = ({ icon }) => {
  return (
    <div
      className="
  p-2.5
  lg:p-3
  bg-white
  text-[#6A7695]
  rounded-full
  hover:bg-[#80B500]
  hover:text-white
  duration-200
"
    >
      <Link>{icon}</Link>
    </div>
  );
};

export default Footer;
