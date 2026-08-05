import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaComments, FaTimes, FaHeadset } from "react-icons/fa";

const SupportChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "8801811956107";
  const message =
    "Hello! I want to know more about your products from Cabbage.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  useEffect(() => {
    const hideDefaultTawk = () => {
      if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
        window.Tawk_API.hideWidget();
      }
    };

    hideDefaultTawk();

    if (window.Tawk_API) {
      window.Tawk_API.onLoad = function () {
        window.Tawk_API.hideWidget();
      };
    }
  }, []);

  const openTawkChat = () => {
    try {
      if (window.Tawk_API) {
        if (typeof window.Tawk_API.maximize === "function") {
          window.Tawk_API.maximize();
        }
        if (typeof window.Tawk_API.hideWidget === "function") {
          window.Tawk_API.hideWidget();
        }
      }
    } catch (error) {
      console.error("Error opening Tawk chat:", error);
    }
    setIsOpen(false);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans select-none"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >

      <div
        className={`mb-3 flex flex-col gap-3 transition-all duration-300 transform origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        }`}
      >
        {/* WhatsApp Option */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3.5 bg-white/95 backdrop-blur-md text-gray-800 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300 group cursor-pointer"
        >
          <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
              Quick Chat
            </span>
            <span className="text-xs font-bold text-gray-700 group-hover:text-[#25D366] transition-colors">
              WhatsApp Support
            </span>
          </div>
          <div className="bg-gradient-to-tr from-[#25D366] to-[#4ade80] text-white p-2.5 rounded-xl shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform flex items-center justify-center">
            <FaWhatsapp size={20} />
          </div>
        </a>

        {/*  chat tawk  */}
        <button
          onClick={openTawkChat}
          className="flex items-center gap-3.5 bg-white/95 backdrop-blur-md text-gray-800 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 hover:border-lime-200 hover:bg-lime-50/50 transition-all duration-300 group cursor-pointer text-left w-full"
        >
          <div className="flex flex-col text-right flex-1">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
              Online
            </span>
            <span className="text-xs font-bold text-gray-700 group-hover:text-[#80B500] transition-colors">
              Live Chat Support
            </span>
          </div>
          <div className="bg-gradient-to-tr from-[#80B500] to-[#a3e635] text-white p-2.5 rounded-xl shadow-md shadow-lime-500/20 group-hover:scale-110 transition-transform flex items-center justify-center">
            <FaComments size={20} />
          </div>
        </button>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group bg-gradient-to-tr from-[#72a100] to-[#80B500] hover:from-[#659100] hover:to-[#72a100] text-white w-14 h-14 rounded-2xl shadow-2xl shadow-lime-600/30 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative border border-white/20"
        title="Customer Support"
      >
        <div className="transition-transform duration-300 group-hover:rotate-12">
          {isOpen ? <FaTimes size={24} /> : <FaHeadset size={26} />}
        </div>

        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default SupportChatWidget;
