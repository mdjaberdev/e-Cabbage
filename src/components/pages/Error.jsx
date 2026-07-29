import React from "react";
import { Link } from "react-router-dom";
import { MdHome, MdArrowBack, MdSearch } from "react-icons/md";
import { LuSprout } from "react-icons/lu";
import Container from "../common/Container";

const Error = () => {
  return (
    <section className="relative bg-[#F9F4EE] min-h-[85vh] flex items-center justify-center py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#80B500]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E5D4C0]/40 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center px-4">
          
          {/* Farm-themed Badge */}
          <div className="inline-flex items-center gap-2 bg-white text-[#80B500] text-sm font-Nunito font-bold px-5 py-2 rounded-full mb-6 border border-[#80B500]/20 shadow-md hover:scale-105 transition-transform duration-300">
            <LuSprout className="text-lg animate-bounce" /> 
            <span>Oops! This patch is empty!</span>
          </div>
          <div className="relative">
            <h3 className="text-Primary font-Inter font-black text-8xl sm:text-[140px] tracking-tighter leading-none select-none opacity-90 drop-shadow-sm">
              404
            </h3>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#80B500]/15 font-Inter font-black text-8xl sm:text-[140px] tracking-tighter translate-x-1 translate-y-1 select-none">
                404
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <h2 className="text-[#222D39] font-Inter font-bold text-2xl sm:text-4xl mt-2">
            We couldn't harvest this page
          </h2>

          {/* Description */}
          <p className="text-[#5C727D] font-Nunito text-base sm:text-lg mt-4 leading-relaxed max-w-lg mx-auto">
            The page you are looking for might have been harvested, moved, or doesn't exist anymore. Let’s guide you back to our fresh organic market.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#80B500] hover:bg-[#6c9b00] text-white font-Nunito font-bold text-base py-4 px-9 rounded-full shadow-xl shadow-[#80B500]/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MdHome className="text-xl" /> Back To Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 text-Primary border border-gray-200 font-Nunito font-bold text-base py-4 px-9 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MdArrowBack className="text-xl" /> Go Previous Page
            </button>
          </div>

          {/* Quick Help Footer Links */}
          <div className="mt-12 pt-8 border-t border-gray-200/60 flex items-center justify-center gap-6 text-sm font-Nunito text-[#647589]">
            <span>Looking for something?</span>
            <Link to="/shop" className="text-[#80B500] font-semibold hover:underline flex items-center gap-1">
              <MdSearch /> Visit Shop
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/contact" className="text-[#80B500] font-semibold hover:underline">
              Get Support
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Error;