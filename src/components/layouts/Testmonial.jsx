import React, { useState } from "react";
import clientTst from "/src/assets/clientTestimonial.png";
import Container from "../common/Container";
import Images from "../common/Images";
import NextArrow from "../common/NextArrow";
import PreveArrow from "../common/PreveArrow";

const Testmonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");

  const testimonialSlides = [1, 2, 3, 4];
  const totalSlides = testimonialSlides.length;

  const handleNext = () => {
    setSlideDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setSlideDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1,
    );
  };

  const handleDotClick = (index) => {
    setSlideDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-[#FBF7F2]">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6 px-4">
          <h3 className="text-Primary text-3xl sm:text-4xl lg:text-5xl font-bold font-Inter tracking-tight">
            Client Testimonial
          </h3>
          <p className="text-[#546375] text-sm sm:text-base font-Rubik mt-3 leading-relaxed">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>

        {/* Main Slider Container */}
        <div className="relative mt-10 sm:mt-12 w-full max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto h-[340px] sm:h-[400px] lg:h-[430px] mb-16 px-6 sm:px-12 lg:px-0">
          {/* Previous Arrow */}
          <div
            onClick={handlePrev}
            className="absolute left-0 sm:-left-12 lg:-left-28 top-1/2 -translate-y-1/2 z-50 cursor-pointer transition-transform hover:scale-110 active:scale-95"
          >
            <PreveArrow />
          </div>

          {/* Slides Wrapper */}
          <div className="relative w-full h-full flex items-center justify-center">
            {testimonialSlides.map((_, index) => {
              let position = index - currentIndex;
              if (position < 0) position += totalSlides;

              const isVisible = position < 3;
              const zIndexClasses = ["z-30", "z-20", "z-10", "z-0"];

              const nextClasses = [
                "translate-x-0 translate-y-0 rotate-0 scale-100 brightness-100",
                "translate-x-4 sm:translate-x-6 -translate-y-3 sm:-translate-y-3.5 rotate-3 scale-95 brightness-95",
                "translate-x-8 sm:translate-x-12 -translate-y-6 sm:-translate-y-7 rotate-6 scale-90 brightness-95",
              ];

              const prevClasses = [
                "translate-x-0 translate-y-0 rotate-0 scale-100 brightness-100",
                "-translate-x-4 sm:-translate-x-6 -translate-y-3 sm:-translate-y-3.5 -rotate-3 scale-95 brightness-95",
                "-translate-x-8 sm:-translate-x-12 -translate-y-6 sm:-translate-y-7 -rotate-6 scale-90 brightness-95",
              ];

              const directionClass =
                slideDirection === "next"
                  ? nextClasses[position] || "translate-x-0"
                  : prevClasses[position] || "translate-x-0";

              const zClass = zIndexClasses[position] || "z-0";

              return (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] outline-none transform-gpu ${
                    isVisible
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  } ${directionClass} ${zClass}`}
                >
                  <div className="w-full h-full bg-white p-5 sm:p-8 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100/80 flex items-center justify-center backdrop-blur-sm">
                    <Images
                      srcImg={clientTst}
                      className="mx-auto w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Arrow */}
          <div
            onClick={handleNext}
            className="absolute right-0 sm:-right-12 lg:-right-28 top-1/2 -translate-y-1/2 z-50 cursor-pointer transition-transform hover:scale-110 active:scale-95"
          >
            <NextArrow />
          </div>

          {/* Dots Navigation */}
          <div className="absolute -bottom-12 sm:-bottom-14 left-0 w-full flex justify-center items-center gap-3 z-40">
            {testimonialSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`rounded-full transition-all duration-500 cursor-pointer ${
                  index === currentIndex
                    ? "bg-[#90be20] w-8 h-[14px] shadow-sm"
                    : "bg-[#c6dd8c]/60 hover:bg-[#c6dd8c] w-[14px] h-[14px]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testmonial;
