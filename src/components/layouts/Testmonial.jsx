import React from "react";
import clientTst from "/src/assets/clientTestimonial.png";
import Slider from "react-slick";
import Container from "../common/Container";
import Images from "../common/Images";
import NextArrow from "../common/NextArrow";
import PreveArrow from "../common/PreveArrow";

const Testmonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PreveArrow />,
  };

  // স্লাইড আইটেমের জন্য একটি ডামি অ্যারে
  const testimonialSlides = [1, 2, 3, 4];

  return (
    <div className="py-12 lg:py-20">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-Primary text-3xl sm:text-4xl lg:text-5xl font-bold font-Inter">
            Client Testimonial
          </h3>

          <p className="text-[#546375] text-sm sm:text-base font-Rubik mt-4">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>

        {/* Slider */}
        <div className="relative testmonial mt-10">
          <Slider {...settings}>
            {testimonialSlides.map((_, index) => (
              <div key={index} className="outline-0">
                <Images
                  srcImg={clientTst}
                  className={"mx-auto w-full sm:w-auto"}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testmonial;