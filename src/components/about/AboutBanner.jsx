import React from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { FaAngleRight } from "react-icons/fa";
import { MdEco, MdLocalShipping, MdVerified } from "react-icons/md";
import bnrLogo from "../../assets/bannerLogo.png";

const AboutBanner = () => {
  return (
    <div className="relative bg-[#F6F9F0] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden select-none border-b border-[#80B500]/15">
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#80B500]/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#E2ECD5]/70 rounded-full blur-[110px] pointer-events-none -z-10" />

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-[60%] text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-x-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm border border-[#80B500]/30 mb-5">
              <img
                src={bnrLogo}
                alt="Banner Badge Logo"
                className="w-4 h-4 object-contain"
                loading="lazy"
              />
              <span className="text-[#80B500] text-xs sm:text-sm font-bold font-Nunito uppercase tracking-wider">
                Fresh From Farm to Your Doorstep
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-gray-900 font-Inter font-black tracking-tight leading-[1.12] mb-4">
              Bringing Nature's Purest Harvest to Cabbage
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base font-Nunito max-w-[540px] mb-8 mx-auto lg:mx-0 leading-relaxed">
              At Cabbage, we connect you directly with local organic farmers to
              deliver 100% chemical-free, handpicked freshness with care,
              transparency, and speed.
            </p>

            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 text-gray-600 text-sm font-Nunito font-medium bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-gray-200/80 shadow-sm mx-auto lg:mx-0">
              <Link to="/" className="hover:text-[#80B500] transition-colors">
                Home
              </Link>
              <FaAngleRight className="text-xs text-[#80B500]" />
              <span className="text-gray-900 font-bold">About Us</span>
            </div>
          </div>

          {/* Right Feature Card */}
          <div className="w-full lg:w-[38%] z-10">
            <div className="bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-white flex flex-col gap-5">
              <h3 className="text-gray-900 font-Inter font-bold text-lg border-b border-gray-100 pb-3">
                Why Choose Cabbage?
              </h3>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-xl shadow-sm">
                  <MdEco />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm font-Inter">
                    100% Farm Fresh
                  </h4>
                  <p className="text-gray-500 text-xs font-Nunito">
                    Harvested daily by certified organic growers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-xl shadow-sm">
                  <MdLocalShipping />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm font-Inter">
                    Temperature Controlled
                  </h4>
                  <p className="text-gray-500 text-xs font-Nunito">
                    Maintains crispness and peak nutritional value
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-[#F6F9F0] text-[#80B500] flex items-center justify-center text-xl shadow-sm">
                  <MdVerified />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm font-Inter">
                    Purity Guaranteed
                  </h4>
                  <p className="text-gray-500 text-xs font-Nunito">
                    Zero synthetic pesticides or harmful preservatives
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

export default React.memo(AboutBanner);
