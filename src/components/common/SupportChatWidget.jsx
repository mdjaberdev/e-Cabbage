import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaComments, FaTimes, FaHeadset } from "react-icons/fa";

const SupportChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTawkLoaded, setIsTawkLoaded] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0); // নতুন মেসেজ কাউন্ট
  const [lastMessage, setLastMessage] = useState(""); // শেষ মেসেজের প্রিভিউ

  const phoneNumber = "8801811956107";
  const message =
    "Hello! I want to know more about your products from Cabbage.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const loadTawkScript = () => {
    if (window.Tawk_API || isTawkLoaded) return;

    window.Tawk_API = window.Tawk_API || {};

    // Tawk.to লোড হওয়ার পর কলব্যাক সেটআপ
    window.Tawk_API.onLoad = function () {
      if (typeof window.Tawk_API.hideWidget === "function") {
        window.Tawk_API.hideWidget();
      }
    };

    // যখন সাপোর্ট টিমের এজেন্ট কোনো মেসেজ পাঠাবে
    window.Tawk_API.onChatMessageAgent = function (message) {
      setUnreadCount((prev) => prev + 1);
      setLastMessage(message.text || "New message received!");
    };

    // সিস্টেম মেসেজ বা অটোমেটেড মেসেজের জন্য
    window.Tawk_API.onChatMessageSystem = function (message) {
      setUnreadCount((prev) => prev + 1);
      setLastMessage(message.text || "Support system message");
    };

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/6a7357582539311d47e467dc/1jv98qdf6";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    s0.parentNode.insertBefore(s1, s0);
    setIsTawkLoaded(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadTawkScript();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openTawkChat = () => {
    // চ্যাট ওপেন করলে কাউন্ট রিসেট হবে
    setUnreadCount(0);
    setLastMessage("");

    if (!window.Tawk_API) {
      loadTawkScript();
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_API.onLoad = function () {
        if (typeof window.Tawk_API.maximize === "function") {
          window.Tawk_API.maximize();
        }
        if (typeof window.Tawk_API.hideWidget === "function") {
          window.Tawk_API.hideWidget();
        }
      };
    } else {
      try {
        if (typeof window.Tawk_API.maximize === "function") {
          window.Tawk_API.maximize();
        }
        if (typeof window.Tawk_API.hideWidget === "function") {
          window.Tawk_API.hideWidget();
        }
      } catch (error) {
        console.error("Error opening Tawk chat:", error);
      }
    }
    setIsOpen(false);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans select-none"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
   
      {!isOpen && unreadCount > 0 && lastMessage && (
        <div
          onClick={openTawkChat}
          className="mb-2 bg-white text-gray-800 text-xs px-3 py-2 rounded-xl shadow-lg border border-lime-200 cursor-pointer animate-bounce max-w-[200px] truncate"
        >
          <span className="font-bold text-[#80B500] block">New Message:</span>
          {lastMessage}
        </div>
      )}

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

        {/* Live Chat Tawk */}
        <button
          onClick={openTawkChat}
          className="flex items-center gap-3.5 bg-white/95 backdrop-blur-md text-gray-800 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 hover:border-lime-200 hover:bg-lime-50/50 transition-all duration-300 group cursor-pointer text-left w-full relative"
        >
          <div className="flex flex-col text-right flex-1">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
              Online
            </span>
            <span className="text-xs font-bold text-gray-700 group-hover:text-[#80B500] transition-colors">
              Live Chat Support
            </span>
          </div>
          <div className="bg-gradient-to-tr from-[#80B500] to-[#a3e635] text-white p-2.5 rounded-xl shadow-md shadow-lime-500/20 group-hover:scale-110 transition-transform flex items-center justify-center relative">
            <FaComments size={20} />
            {/* Live Chat বাটন লিস্টের ভেতরে নোটিফিকেশন ব্যাজ */}
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-white">
                {unreadCount}
              </span>
            )}
          </div>
        </button>
      </div>

      {/* Main Support Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group bg-gradient-to-tr from-[#72a100] to-[#80B500] hover:from-[#659100] hover:to-[#72a100] text-white w-14 h-14 rounded-2xl shadow-2xl shadow-lime-600/30 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative border border-white/20"
        title="Customer Support"
      >
        <div className="transition-transform duration-300 group-hover:rotate-12">
          {isOpen ? <FaTimes size={24} /> : <FaHeadset size={26} />}
        </div>

        {/* কোনো মেসেজ না থাকলেও ডিফল্ট রেড ডট দেখাবে, আর মেসেজ আসলে মেসেজের সংখ্যা দেখাবে */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white text-[10px] font-bold text-white items-center justify-center">
              {unreadCount > 0 ? unreadCount : ""}
            </span>
          </span>
        )}
      </button>
    </div>
  );
};

export default SupportChatWidget;
