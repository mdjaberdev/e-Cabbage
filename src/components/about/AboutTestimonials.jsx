import React, { useState, useCallback } from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import NextArrow from "../common/NextArrow";
import PreveArrow from "../common/PreveArrow";
import clientTst from "../../assets/clientTastm.png";

const testimonialSlides = [
  {
    name: "Jessica Taylor",
    role: "Product Manager",
    desc: "An absolute pleasure working with this platform. The organic quality and fast delivery service completely exceeded my expectations. Highly recommend to everyone looking for fresh items!",
  },
  {
    name: "Lurch Schpellchek",
    role: "UI/UX designer",
    desc: "What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, haggle young delinquent say so I said bite your arm off easy peasy. Skive off it's all gone to pot buggered.",
  },
  {
    name: "Michael Smith",
    role: "Software Engineer",
    desc: "Incredible attention to detail and superb user experience. Everything runs smoothly and the support community is extremely active and helpful.",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Head",
    desc: "The best marketplace for organic and sustainable products. Clean interface, reliable transactions, and amazing customer service all around.",
  },
];

const totalSlides = testimonialSlides.length;

const AboutTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");

  const handleNext = useCallback(() => {
    setSlideDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1,
    );
  }, []);

  const handlePrev = useCallback(() => {
    setSlideDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1,
    );
  }, []);

  const handleDotClick = useCallback(
    (index) => {
      setSlideDirection(index > currentIndex ? "next" : "prev");
      setCurrentIndex(index);
    },
    [currentIndex],
  );

  return (
    <div className="py-16 sm:py-20 bg-[#f7f5eb]">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 px-4">
          <span className="text-[#80B500] text-sm font-Nunito font-bold uppercase tracking-widest bg-white px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
            Testimonials
          </span>
          <h3 className="text-Primary text-3xl sm:text-4xl lg:text-[44px] font-bold font-Inter tracking-tight">
            Client Testimonial
          </h3>
          <p className="text-[#546375] text-sm sm:text-base font-Nunito mt-3 leading-relaxed">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-12 w-full max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-16 px-6 sm:px-12 lg:px-0">
          {/* Previous Arrow */}
          <div
            onClick={handlePrev}
            className="absolute left-0 sm:-left-12 lg:-left-20 top-[45%] -translate-y-1/2 z-50 cursor-pointer transition-transform hover:scale-110 active:scale-95"
          >
            <PreveArrow />
          </div>

          {/* Slides Wrapper */}
          <div className="relative w-full min-h-[420px] sm:min-h-[380px]">
            {testimonialSlides.map((slide, index) => {
              let position = index - currentIndex;
              if (position < 0) position += totalSlides;

              const isVisible = position < 3;
              const zIndexClasses = ["z-30", "z-20", "z-10", "z-0"];

              const nextClasses = [
                "translate-x-0 translate-y-0 rotate-0 scale-100 brightness-100",
                "translate-x-4 sm:translate-x-6 -translate-y-4 sm:-translate-y-5 rotate-3 scale-95 brightness-95",
                "translate-x-8 sm:translate-x-12 -translate-y-8 sm:-translate-y-10 rotate-6 scale-90 brightness-95",
              ];

              const prevClasses = [
                "translate-x-0 translate-y-0 rotate-0 scale-100 brightness-100",
                "-translate-x-4 sm:-translate-x-6 -translate-y-4 sm:-translate-y-5 -rotate-3 scale-95 brightness-95",
                "-translate-x-8 sm:-translate-x-12 -translate-y-8 sm:-translate-y-10 -rotate-6 scale-90 brightness-95",
              ];

              const directionClass =
                slideDirection === "next"
                  ? nextClasses[position] || "translate-x-0"
                  : prevClasses[position] || "translate-x-0";

              const zClass = zIndexClasses[position] || "z-0";

              return (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] outline-none transform-gpu ${
                    isVisible
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  } ${directionClass} ${zClass}`}
                >
                  <div className="w-full h-[400px] bg-white mt-5 p-6 rounded-[28px] shadow-[0_10px_40px_rgba(12,0,46,0.08)] border border-gray-100 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-sm flex items-center justify-center bg-gray-50 flex-shrink-0">
                      <Images
                        srcImg={clientTst}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-[#222D39] text-lg sm:text-xl font-bold font-Inter pt-4">
                      {slide.name}
                    </h4>
                    <h5 className="text-[#959CB1] text-xs sm:text-sm font-Nunito mt-0.5">
                      {slide.role}
                    </h5>
                    <p className="text-[#5C727D] text-sm sm:text-base font-Nunito max-w-xl mx-auto leading-relaxed pt-3">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Arrow */}
          <div
            onClick={handleNext}
            className="absolute right-0 sm:-right-12 lg:-right-20 top-[45%] -translate-y-1/2 z-50 cursor-pointer transition-transform hover:scale-110 active:scale-95"
          >
            <NextArrow />
          </div>

          {/* Dots Navigation */}
          <div className="mt-14 sm:mt-16 w-full flex justify-center items-center gap-3 z-40 relative">
            {testimonialSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`rounded-full transition-all duration-500 cursor-pointer ${
                  index === currentIndex
                    ? "bg-[#80B500] w-8 h-[14px] shadow-sm"
                    : "bg-[#c6dd8c]/60 hover:bg-[#80B500] w-[14px] h-[14px]"
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

export default React.memo(AboutTestimonials);
