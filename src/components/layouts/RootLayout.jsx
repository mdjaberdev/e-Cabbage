import React from "react";
import HeaderTop from "./HeaderTop";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Companylogo from "./Companylogo";
import SupportChatWidget from "../common/SupportChatWidget";


const RootLayout = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <Outlet />
      <Companylogo />
      <Footer />
      <SupportChatWidget/>
    </>
  );
};

export default RootLayout;
