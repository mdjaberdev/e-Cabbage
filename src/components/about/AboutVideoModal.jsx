import React, { useState } from "react";
import Container from "../common/Container";
import { IoPlay } from "react-icons/io5";
import { HiX } from "react-icons/hi";
import ReactModal from "react-modal";

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

const AboutVideoModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const videoEmbedLink = "https://www.youtube.com/embed/SdIfXWAKioI?autoplay=1";

  return (
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
              aria-label="Play promo video"
              className="relative group w-20 h-20 sm:w-28 sm:h-28 bg-[#80B500] hover:bg-[#6c9b00] text-white rounded-full flex items-center justify-center cursor-pointer shadow-2xl shadow-[#80B500]/30 transition-all duration-500 hover:scale-110 active:scale-95"
            >
              <IoPlay className="text-white text-3xl sm:text-5xl ml-1.5 transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute inset-0 rounded-full border-2 border-[#80B500] animate-ping opacity-75"></span>
            </button>
          </div>
        </div>
      </Container>

      {/* Video Popup */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Promo Video Modal"
      >
        <button
          onClick={() => setModalIsOpen(false)}
          aria-label="Close modal"
          className="absolute -top-1 -right-1 z-50 bg-white/25 backdrop-blur-md text-white p-2.5 rounded-full hover:bg-[#80B500] transition-all duration-300 cursor-pointer shadow-lg"
        >
          <HiX size={20} />
        </button>
        <div className="relative pt-[56.25%] w-full h-0 shadow-2xl rounded-2xl overflow-hidden bg-black border border-white/10">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src={modalIsOpen ? videoEmbedLink : ""}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </ReactModal>
    </div>
  );
};

export default React.memo(AboutVideoModal);
