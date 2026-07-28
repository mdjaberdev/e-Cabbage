import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Images from "../common/Images";
import {
  FaAngleRight,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import { HiX } from "react-icons/hi";
import ReactModal from "react-modal";

import clientTst from "/src/assets/clientTastm.png";
import NextArrow from "../common/NextArrow";
import PreveArrow from "../common/PreveArrow";
import { Helmet } from "react-helmet-async";

if (typeof document !== "undefined") {
  ReactModal.setAppElement("#root");
}

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");

  const [products, setProducts] = useState([]);
  const [productCurrentIndex, setProductCurrentIndex] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const videoEmbedLink = "https://www.youtube.com/embed/SdIfXWAKioI?autoplay=1";

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=40",
        );
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setProductCurrentIndex((prev) => {
        if (prev >= products.length - 2) {
          return 0;
        }
        return prev + 2;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [products]);

  const product1 = products[productCurrentIndex];
  const product2 = products[productCurrentIndex + 1];

  // Testimonials Data
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

  const teamMembers = [
    {
      name: "John Abraham",
      role: "Consultant",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Sarah Williams",
      role: "Organizer",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Michael Smith",
      role: "Manager",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
    },
  ];

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "transparent",
      padding: "0",
      width: "90%",
      maxWidth: "950px",
      overflow: "hidden",
      borderRadius: "20px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      zIndex: "1000",
      backdropFilter: "blur(8px)",
    },
  };

  return (
    <>
      <Helmet>
        <title>Cabbage About</title>
        <meta name="about" content="welcome to about page" />
      </Helmet>
      <section className="overflow-hidden">
        {/* Banner Section */}
        <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-24 lg:py-36">
          <Container>
            <div>
              <h3 className="text-Primary text-4xl sm:text-5xl font-bold font-Inter">
                About us
              </h3>
              <h5 className="text-[#133344] text-base sm:text-lg font-Nunito flex items-center gap-2 mt-2">
                <Link to="/" className="hover:text-[#80B500] transition-colors">
                  Home
                </Link>
                <FaAngleRight /> About
              </h5>
            </div>
          </Container>
        </div>

        {/*  About Details Section */}
        <div className="bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
          <Container>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
              <div className="flex justify-center items-center gap-x-4 sm:gap-x-6 lg:gap-x-8 relative w-full lg:w-auto">
                <div className="absolute -inset-4 bg-[#80B500]/5 rounded-3xl blur-xl -z-10"></div>

                {product1 && (
                  <Link
                    to={`/product/${product1.id}`}
                    className="bg-white p-2 sm:p-3 rounded-2xl shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-[#80B500]/50 block cursor-pointer group"
                  >
                    <Images
                      className="w-[140px] xs:w-[160px] sm:w-[200px] lg:w-[240px] h-[260px] sm:h-[380px] lg:h-[460px] object-cover rounded-xl bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                      srcImg={product1.thumbnail}
                    />
                  </Link>
                )}

                {product2 && (
                  <Link
                    to={`/product/${product2.id}`}
                    className="mt-8 sm:mt-12 lg:mt-16 bg-white p-2 sm:p-3 rounded-2xl shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-[#80B500]/50 block cursor-pointer group"
                  >
                    <Images
                      className="w-[140px] xs:w-[160px] sm:w-[200px] lg:w-[240px] h-[260px] sm:h-[380px] lg:h-[460px] object-cover rounded-xl bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                      srcImg={product2.thumbnail}
                    />
                  </Link>
                )}
              </div>

              <div className="text-center lg:text-left lg:max-w-xl w-full">
                <span className="inline-block bg-[#80B500]/10 text-[#80B500] text-xs sm:text-sm lg:text-[16px] font-Nunito font-bold px-4 py-1.5 rounded-full mb-3 lg:mb-4">
                  Know More About Shop
                </span>

                <h3 className="text-Primary text-2xl sm:text-3xl lg:text-[45px] font-Inter font-bold leading-snug sm:leading-tight lg:leading-[55px]">
                  Trusted Organic Food Store For People
                </h3>

                <div className="text-[#546375] text-sm sm:text-base lg:text-[18px] font-Nunito leading-relaxed mt-4 sm:mt-5 space-y-3 sm:space-y-4">
                  <p>
                    Buy natural, sustainable and chemical-free products from
                    local the country. We are a strong community of 100,000+
                    sellers who aspire to be good, do good, and spread goodness.
                  </p>
                  <p>
                    We are a democratic, self-sustaining, two-sided marketplace
                    which thrives on trust and is built on community and quality
                    content.
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100 flex flex-col lg:flex-row items-center lg:items-start gap-4">
                  <div>
                    <h4 className="text-[#223645] text-base sm:text-lg font-bold font-Playfair">
                      Jerry Henson
                    </h4>
                    <p className="text-[#808B94] text-xs font-Nunito tracking-wider uppercase mt-0.5">
                      / Shop Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Interactive Video Modal Section */}
        <div className="relative bg-[#F9F4EE] py-20 sm:py-28 lg:py-36 flex items-center justify-center overflow-hidden">
          <Container className="relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <span className="inline-block bg-[#80B500]/10 text-[#80B500] text-xs sm:text-sm font-Nunito font-bold tracking-wider uppercase py-1.5 px-4 rounded-full mb-4 border border-[#80B500]/20 shadow-sm">
                  Discover Our Process
                </span>
                <h2 className="text-[#0A2C3D] font-Inter font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                  A Glimpse Into Our Organic Farm & Quality
                </h2>
                <p className="text-[#647589] font-Nunito text-base sm:text-lg mt-4 max-w-xl mx-auto lg:mx-0">
                  Experience how we handpick the freshest organic items straight
                  from nature to your doorstep with absolute care and purity.
                </p>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <button
                  onClick={() => setModalIsOpen(true)}
                  className="relative group w-20 h-20 sm:w-28 sm:h-28 bg-[#80B500] hover:bg-[#6c9b00] text-white rounded-full flex items-center justify-center cursor-pointer shadow-2xl shadow-[#80B500]/30 transition-all duration-500 hover:scale-110 active:scale-95"
                >
                  <IoPlay className="text-white text-3xl sm:text-5xl ml-1.5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute inset-0 rounded-full border-2 border-[#80B500] animate-ping opacity-75"></span>
                </button>
              </div>
            </div>
          </Container>

          {/* Video Modal Popup */}
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
            contentLabel="Promo Video Modal"
          >
            <button
              onClick={() => setModalIsOpen(false)}
              className="absolute -top-1 -right-1 z-50 bg-white/25 backdrop-blur-md text-white p-2.5 rounded-full hover:bg-[#80B500] transition-all duration-300 cursor-pointer shadow-lg"
            >
              <HiX size={20} />
            </button>
            <div className="relative pt-[56.25%] w-full h-0 shadow-2xl rounded-2xl overflow-hidden bg-black border border-white/10">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src={videoEmbedLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </ReactModal>
        </div>

        {/*  Team Member Section */}
        <Container>
          <div className="my-20 lg:my-28 text-center">
            <span className="text-[#80B500] text-sm font-Nunito font-bold uppercase tracking-widest bg-[#F4F9EB] px-4 py-1.5 rounded-full inline-block mb-3">
              Expert Team
            </span>
            <h3 className="text-Primary text-3xl sm:text-4xl lg:text-[44px] font-Inter font-bold">
              Team Member
            </h3>
            <p className="text-[#546375] text-base font-Nunito pt-3 max-w-lg mx-auto">
              A highly efficient slip-ring scanner for today's diagnostic
              requirements.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group"
                >
                  <div className="overflow-hidden rounded-xl mb-6 bg-gray-50">
                    <Images
                      srcImg={member.img}
                      className="mx-auto w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-Primary text-2xl font-Inter font-bold">
                    {member.name}
                  </h4>
                  <p className="text-[#80B500] text-lg font-Nunito font-medium pt-1 pb-4">
                    {member.role}
                  </p>
                  <div className="flex justify-center gap-2">
                    <div className="p-3 bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white transition-colors">
                      <FaTwitter />
                    </div>
                    <div className="p-3 bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white transition-colors">
                      <FaFacebookF />
                    </div>
                    <div className="p-3 bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white transition-colors">
                      <FaInstagram />
                    </div>
                    <div className="p-3 bg-[#e8f2d1] rounded-full cursor-pointer hover:bg-[#80B500] hover:text-white transition-colors">
                      <FaLinkedinIn />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Client Testimonial Section */}
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
      </section>
    </>
  );
};

export default About;
