import React, { useState } from "react";
import clientTst from "/src/assets/clientTestimonial.png";
import Container from "../common/Container";
import Images from "../common/Images";
import NextArrow from "../common/NextArrow";
import PreveArrow from "../common/PreveArrow";

const Testmonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialSlides = [1, 2, 3, 4];
  const totalSlides = testimonialSlides.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1,
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#FBF7F2]">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h3 className="text-Primary text-3xl sm:text-4xl lg:text-5xl font-bold font-Inter tracking-tight">
            Client Testimonial
          </h3>
          <p className="text-[#546375] text-sm sm:text-base font-Rubik mt-3 leading-relaxed">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>

        {/* Main Slider Container */}
        <div className="relative mt-12 w-full max-w-3xl mx-auto h-[380px] sm:h-[430px] mb-16">
          {/* Previous Arrow */}
          <div
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-30 top-1/2 -translate-y-1/2 z-50 cursor-pointer transition-transform hover:scale-110 active:scale-95"
          >
            <PreveArrow />
          </div>

          {/* Slides Wrapper */}
          <div className="relative w-full h-full flex items-center justify-center">
            {testimonialSlides.map((_, index) => {
              let position = index - currentIndex;
              if (position < 0) position += totalSlides;

              const isVisible = position < 3;

              return (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] outline-none ${
                    isVisible
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                  style={{
                    zIndex: totalSlides - position,
                    transform: `translateX(${position * 32}px) translateY(${position * -18}px) scale(${1 - position * 0.04})`,
                    filter: position > 0 ? "brightness(0.98)" : "brightness(1)",
                  }}
                >
                  <div className="w-full h-full bg-white p-6 sm:p-8 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100/80 flex items-center justify-center backdrop-blur-sm">
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
            className="absolute -right-4 sm:-right-30 top-1/2 -translate-y-1/2 z-50 cursor-pointer transition-transform hover:scale-110 active:scale-95"
          >
            <NextArrow />
          </div>

          <div className="absolute -bottom-14 left-0 w-full flex justify-center items-center gap-3 z-30">
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
