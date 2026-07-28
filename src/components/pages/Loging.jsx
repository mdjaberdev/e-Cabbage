import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Container from "../common/Container";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const Loging = () => {
  return (
    <section className="overflow-hidden">
      {/* Banner Section */}
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-24 lg:py-36">
        <Container>
          <div>
            <h3 className="text-Primary text-4xl sm:text-5xl font-bold font-Inter">
              Login Page
            </h3>
            <h5 className="text-[#133344] text-base sm:text-lg font-Nunito flex items-center gap-2 mt-2">
              <Link to="/" className="hover:text-[#80B500] transition-colors">
                Home
              </Link>
              <FaAngleRight /> Login
            </h5>
          </div>
        </Container>
      </div>

      {/* Main Container Section */}
      <div className="my-16 md:my-[120px]">
        <Container>
          <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-[90px]">
            {/* Login Box */}
            <div className="py-8 px-6 sm:py-[40px] sm:px-[54px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] bg-white w-full lg:w-[540px] rounded-xl">
              <div className="text-center mb-8 md:mb-[43px]">
                <h4 className="text-Primary text-[28px] md:text-[32px] font-bold font-Inter">
                  Login
                </h4>
                <p className="text-[#546375] text-sm md:text-base font-Nunito mt-1">
                  Please login using account detail below.
                </p>
              </div>

              {/* Email Input */}
              <div className="py-[14px] px-3 border border-[#C2C5E1] rounded-md focus-within:border-[#80B500] transition-colors">
                <input
                  className="text-Primary text-base font-Nunito outline-0 w-full bg-transparent"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              {/* Password Input */}
              <div className="py-[14px] px-3 border border-[#C2C5E1] rounded-md my-4 md:my-5 focus-within:border-[#80B500] transition-colors">
                <input
                  className="text-Primary text-base font-Nunito outline-0 w-full bg-transparent"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <Link
                to=""
                className="text-[#546375] text-sm md:text-base font-Nunito hover:text-[#80B500] transition-colors inline-block"
              >
                Forgot your password?
              </Link>

              <div className="my-6 md:my-[28px]">
                <Button className="w-full" btnTxt={"Sign In"} />
              </div>

              <p className="text-[#546375] text-sm md:text-base font-Nunito text-center">
                Don't Have an Account?{" "}
                <Link
                  to=""
                  className="text-Primary font-bold hover:text-[#80B500] transition-colors"
                >
                  Create account
                </Link>
              </p>
            </div>

            {/* Register Box */}
            <div className="py-8 px-6 sm:py-[40px] sm:px-[54px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] bg-white w-full lg:w-[540px] rounded-xl">
              <div className="text-center mb-8 md:mb-[43px]">
                <h4 className="text-Primary text-[28px] md:text-[32px] font-bold font-Inter">
                  Register
                </h4>
                <p className="text-[#546375] text-sm md:text-base font-Nunito mt-1">
                  Don't have an account? Register below.
                </p>
              </div>

              {/* Register Email */}
              <div className="py-[14px] px-3 border border-[#C2C5E1] rounded-md focus-within:border-[#80B500] transition-colors">
                <input
                  className="text-Primary text-base font-Nunito outline-0 w-full bg-transparent"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              {/* Register Password */}
              <div className="py-[14px] px-3 border border-[#C2C5E1] rounded-md my-4 md:my-5 focus-within:border-[#80B500] transition-colors">
                <input
                  className="text-Primary text-base font-Nunito outline-0 w-full bg-transparent"
                  type="password"
                  placeholder="Create password"
                />
              </div>
              <p className="text-[#546375] text-xs md:text-sm font-Nunito -mt-2 mb-4">
                Password must contain (@, letter, number)
              </p>

              {/* First Name */}
              <div className="py-[14px] px-3 border border-[#C2C5E1] rounded-md focus-within:border-[#80B500] transition-colors">
                <input
                  className="text-Primary text-base font-Nunito outline-0 w-full bg-transparent"
                  type="text"
                  placeholder="First Name"
                />
              </div>

              {/* Last Name */}
              <div className="py-[14px] px-3 border border-[#C2C5E1] rounded-md my-4 md:my-5 focus-within:border-[#80B500] transition-colors">
                <input
                  className="text-Primary text-base font-Nunito outline-0 w-full bg-transparent"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              {/* Phone Number */}
              <div className="py-[14px] px-3 border border-[#C2C5E1] rounded-md focus-within:border-[#80B500] transition-colors">
                <input
                  className="text-Primary text-base font-Nunito outline-0 w-full bg-transparent"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>

              <div className="mt-4 md:mt-5">
                <label className="text-[#546375] text-sm md:text-base font-Nunito flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[#80B500] w-4 h-4" />
                  I agree to Terms & Conditions and All Policy
                </label>
              </div>

              <div className="mt-6 md:mt-[28px]">
                <Button className="w-full" btnTxt={"Create Account"} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Loging;
