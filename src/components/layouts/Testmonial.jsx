import React from "react";
import clientTst from "/src/assets/clientTestimonial.png";
import Slider from "react-slick";
import Container from "../common/Container";
import Images from "../common/Images";
import NextArrow from "../common/NextArrow";
import PreveArrow from "../common/PreveArrow";


const Testmonial = () => {
  var settings = {
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

  return (
    <div className="py-20">
      <Container>
        <div className="text-center">
          <h3 className="text-Primary text-5xl font-bold font-Inter ">
            Client Testimonial
          </h3>
          <p className="text-[#546375] text-base font-Rubik mt-4">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>
        <div className="relative testmonial">
          <Slider {...settings}>
            <div className="outline-0">
              <Images srcImg={clientTst} className={"mx-auto"} />
            </div>
            <div className="outline-0">
              <Images srcImg={clientTst} className={"mx-auto"} />
            </div>
            <div className="outline-0">
              <Images srcImg={clientTst} className={"mx-auto"} />
            </div>
            <div className="outline-0">
              <Images srcImg={clientTst} className={"mx-auto"} />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testmonial;
