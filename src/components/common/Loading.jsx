import React from "react";
import { LuSprout } from "react-icons/lu";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#061822] overflow-hidden select-none">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#80B500]/15 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none animate-pulse [animation-duration:3s]"></div>

      <div className="relative flex items-center justify-center scale-90 sm:scale-100">
        <div className="w-40 h-40 border border-[#80B500]/20 rounded-full animate-[spin_15s_linear_infinite]"></div>

        <div className="absolute w-32 h-32 border-2 border-dashed border-[#80B500]/40 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>

        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-[#80B500] via-[#80B500]/30 to-transparent animate-[spin_1.2s_linear_infinite] p-[2px]">
          <div className="w-full h-full bg-[#061822] rounded-full"></div>
        </div>
        <div className="absolute w-16 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl rotate-45 flex items-center justify-center shadow-2xl shadow-[#80B500]/20 animate-bounce [animation-duration:2s]">
          <div className=" -rotate-45 text-[#80B500]">
            <LuSprout size={28} />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center relative z-10 px-6">
        <h1 className="text-white text-3xl font-extrabold font-Inter tracking-widest uppercase">
          Cabbage<span className="text-[#80B500]">.</span>
        </h1>

        <div className="mt-3 flex flex-col items-center gap-3">
          <p className="text-gray-400 text-xs sm:text-sm font-Nunito font-medium tracking-[0.25em] uppercase">
            Harvesting Excellence
          </p>

          <div className="w-48 h-1.5 bg-white/5 rounded-full p-0.5 border border-white/10 overflow-hidden relative shadow-inner">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#80B500] to-transparent rounded-full animate-[pulse_1.8s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
