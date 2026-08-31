import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaWhatsapp, FaComments, FaTimes, FaHeadset } from "react-icons/fa";

const TAWK_PROPERTY_ID = "6a7357582539311d47e467dc";
const TAWK_WIDGET_ID = "1jv98qdf6";
const PHONE_NUMBER = "8801811956107";
const DEFAULT_MESSAGE =
  "Hello! I want to know more about your products from Cabbage.";

const SupportChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [lastMessage, setLastMessage] = useState("");
  const isLoadedRef = useRef(false);
  const widgetRef = useRef(null);

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  // Attach Tawk Event Handlers safely
  const attachTawkEvents = useCallback(() => {
    if (!window.Tawk_API) return;

    window.Tawk_API.onLoad = () => {
      if (typeof window.Tawk_API.hideWidget === "function") {
        window.Tawk_API.hideWidget();
      }
    };

    window.Tawk_API.onChatMessageAgent = (msg) => {
      setUnreadCount((prev) => prev + 1);
      setLastMessage(msg?.text || "New message received!");
    };

    window.Tawk_API.onChatMessageSystem = (msg) => {
      setUnreadCount((prev) => prev + 1);
      setLastMessage(msg?.text || "Support system message");
    };
  }, []);

  // Load Tawk script dynamically
  const loadTawkScript = useCallback(() => {
    if (isLoadedRef.current || document.getElementById("tawk-script")) return;

    window.Tawk_API = window.Tawk_API || {};
    attachTawkEvents();

    const script = document.createElement("script");
    script.id = "tawk-script";
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.head.appendChild(script);
    isLoadedRef.current = true;
  }, [attachTawkEvents]);

  // Delayed script initialization
  useEffect(() => {
    const timer = setTimeout(() => {
      loadTawkScript();
    }, 3000);

    return () => clearTimeout(timer);
  }, [loadTawkScript]);

  // Close popup menu when clicking outside of the widget
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Action: Open Tawk Chat Widget
  const handleOpenTawkChat = () => {
    setUnreadCount(0);
    setLastMessage("");
    setIsOpen(false);

    if (!isLoadedRef.current) {
      loadTawkScript();
    }

    if (window.Tawk_API) {
      try {
        if (typeof window.Tawk_API.maximize === "function") {
          window.Tawk_API.maximize();
        }
        if (typeof window.Tawk_API.hideWidget === "function") {
          window.Tawk_API.hideWidget();
        }
      } catch (error) {
        console.error("Failed to trigger Tawk.to widget:", error);
      }
    }
  };

  return (
    <aside
      ref={widgetRef}
      aria-label="Customer Support Chat"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans select-none"
    >
      {/* Unread Message Floating Preview Notification */}
      {!isOpen && unreadCount > 0 && lastMessage && (
        <button
          type="button"
          onClick={handleOpenTawkChat}
          className="mb-3 bg-white/95 backdrop-blur-md text-gray-800 text-xs px-3.5 py-2.5 rounded-2xl shadow-xl border border-lime-200/80 hover:border-lime-400 transition-all cursor-pointer animate-bounce max-w-[220px] text-left group"
        >
          <span className="font-bold text-[#80B500] block text-[11px] uppercase tracking-wider">
            New Message
          </span>
          <p className="truncate text-gray-600 font-medium">{lastMessage}</p>
        </button>
      )}

      {/* Expandable Options Menu */}
      <div
        className={`mb-3 flex flex-col gap-2.5 transition-all duration-300 transform origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-3 pointer-events-none"
        }`}
      >
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-between gap-4 bg-white/90 backdrop-blur-md text-gray-800 px-4 py-3 rounded-2xl shadow-lg border border-gray-100 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all duration-200 group cursor-pointer"
        >
          <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
              Instant Chat
            </span>
            <span className="text-xs font-bold text-gray-700 group-hover:text-[#25D366] transition-colors">
              WhatsApp Support
            </span>
          </div>
          <div className="bg-gradient-to-tr from-[#25D366] to-[#4ade80] text-white p-2.5 rounded-xl shadow-sm shadow-emerald-500/30 group-hover:scale-105 transition-transform flex items-center justify-center">
            <FaWhatsapp size={18} />
          </div>
        </a>

        {/* Live Chat Tawk Button */}
        <button
          type="button"
          onClick={handleOpenTawkChat}
          className="flex items-center justify-between gap-4 bg-white/90 backdrop-blur-md text-gray-800 px-4 py-3 rounded-2xl shadow-lg border border-gray-100 hover:border-lime-300 hover:bg-lime-50/40 transition-all duration-200 group cursor-pointer text-left"
        >
          <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
              Online Agents
            </span>
            <span className="text-xs font-bold text-gray-700 group-hover:text-[#80B500] transition-colors">
              Live Chat Support
            </span>
          </div>
          <div className="bg-gradient-to-tr from-[#80B500] to-[#a3e635] text-white p-2.5 rounded-xl shadow-sm shadow-lime-500/30 group-hover:scale-105 transition-transform flex items-center justify-center relative">
            <FaComments size={18} />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white">
                {unreadCount}
              </span>
            )}
          </div>
        </button>
      </div>

      {/* Main Trigger Floating Action Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Toggle Support Options"
        className="group bg-gradient-to-tr from-[#72a100] to-[#80B500] hover:from-[#659100] hover:to-[#72a100] text-white w-14 h-14 rounded-2xl shadow-xl shadow-lime-600/25 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative border border-white/30"
      >
        <div className="transition-transform duration-300 group-hover:rotate-12">
          {isOpen ? <FaTimes size={22} /> : <FaHeadset size={24} />}
        </div>

        {/* Global Ping Badge */}
        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white text-[9px] font-extrabold text-white items-center justify-center">
              {unreadCount}
            </span>
          </span>
        )}
      </button>
    </aside>
  );
};

export default SupportChatWidget;
