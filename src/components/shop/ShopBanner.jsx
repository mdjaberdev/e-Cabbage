import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { MdVerified, MdLocalShipping, MdEco } from "react-icons/md";
import Container from "../common/Container";
import bnrLogo from "/src/assets/bannerLogo.png";

const ShopBanner = () => {
  return (
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
                100% Certified Organic Products
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gray-900 font-Inter font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3 sm:mb-4">
              Explore Our Fresh Organic Store
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-xs sm:text-base font-Nunito max-w-[540px] mb-6 sm:mb-8 mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              Discover handpicked farm-fresh vegetables, organic fruits, and
              healthy essentials delivered right to your doorstep with ultimate
              care.
            </p>

            {/* Breadcrumb Navigation */}
            <div className="inline-flex items-center gap-2 text-gray-600 text-xs sm:text-sm font-Nunito font-medium bg-white/80 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gray-200/80 shadow-sm mx-auto lg:mx-0">
              <Link to="/" className="hover:text-[#80B500] transition-colors">
                Home
              </Link>
              <FaAngleRight className="text-xs text-[#80B500]" />
              <span className="text-gray-900 font-bold">Shop Collection</span>
            </div>
          </div>

          {/* Right Feature Card */}
          <div className="w-full lg:w-[38%] z-10">
            <div className="bg-white/90 backdrop-blur-xl p-5 sm:p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-white flex flex-col gap-4 sm:gap-5">
              <h3 className="text-gray-900 font-Inter font-bold text-base sm:text-lg border-b border-gray-100 pb-3">
                Why Shop With Us?
              </h3>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-lg sm:text-xl shadow-sm">
                  <MdEco />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-xs sm:text-sm font-Inter">
                    100% Natural Harvest
                  </h4>
                  <p className="text-gray-500 text-[11px] sm:text-xs font-Nunito">
                    Directly sourced from trusted local farmers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-lg sm:text-xl shadow-sm">
                  <MdLocalShipping />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-xs sm:text-sm font-Inter">
                    Express Home Delivery
                  </h4>
                  <p className="text-gray-500 text-[11px] sm:text-xs font-Nunito">
                    Fast and temperature-controlled shipping
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-lg sm:text-xl shadow-sm">
                  <MdVerified />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-xs sm:text-sm font-Inter">
                    Quality Guaranteed
                  </h4>
                  <p className="text-gray-500 text-[11px] sm:text-xs font-Nunito">
                    Strict quality checks on every order
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(ShopBanner);
