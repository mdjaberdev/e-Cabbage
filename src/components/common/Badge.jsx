import React from "react";

const Badge = ({ badgeTxt, className }) => {
  return (
    <div
      className={`py-2 px-3 w-13 absolute top-2 right-7  bg-[#80B500] text-white text-sm font-Nunito ${className}`}
    >
      {badgeTxt}
    </div>
  );
};

export default Badge;
