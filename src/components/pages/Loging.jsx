import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import Container from '../common/Container';
import Button from '../common/Button';

const Loging = () => {
  return (
    <section>
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-37.5">
        <Container>
          <div className="">
            <h3 className="text-Primary text-[55px] font-bold font-Inter">
              Login Page
            </h3>
            <h5 className="text-[#133344] text-[18px] font-Nunito flex items-center">
              Home <FaAngleRight /> Pages <FaAngleRight /> Login
            </h5>
          </div>
        </Container>
      </div>
      <div className="my-[120px]">
        <Container>
          <div className="flex gap-x-[90px]">
            {/* Login  */}
            <div className="py-[40px] px-[54px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-white w-[540px]">
              <div className="text-center mb-[43px]">
                <h4 className="text-Primary text-[32px] font-bold font-Inter">
                  Login
                </h4>
                <p className="text-[#546375] text-base font-Nunito">
                  Please login using account detail bellow.
                </p>
              </div>
              <div className="py-[15px] px-3 border border-[#C2C5E1] ">
                <input className='text-Primary text-base font-Nunito outline-0 w-full' type="email" placeholder="Email Address" />
              </div>
              <div className="py-[15px] px-3 border border-[#C2C5E1] my-5">
                <input className='text-Primary text-base font-Nunito outline-0 w-full' type="password" placeholder="Password" />
              </div>
              <p className="text-[#546375] text-base font-Nunito">
                Forgot your password?
              </p>
              <Button className={"w-full my-[28px]"} btnTxt={"Sign In"} />
              <p className="text-[#546375] text-base font-Nunito">
                Don't Have an Account? Create account
              </p>
            </div>
            {/* Register  */}
            <div className="py-[40px] px-[54px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-white w-[540px]">
              <div className="text-center mb-[43px]">
                <h4 className="text-Primary text-[32px] font-bold font-Inter">
                  Register
                </h4>
                <p className="text-[#546375] text-base font-Nunito">
                  Don,t have an account?Register
                </p>
              </div>
              <div className="py-[15px] px-3 border border-[#C2C5E1] ">
                <input className='text-Primary text-base font-Nunito outline-0 w-full' type="email" placeholder="Email Address" />
              </div>
              <div className="py-[15px] px-3 border border-[#C2C5E1] my-5">
                <input className='text-Primary text-base font-Nunito outline-0 w-full' type="password" placeholder="Create password" />
              </div>
              <p className="text-[#546375] text-base font-Nunito">
                Password must contain(@, letter ,number)
              </p>
              <div className="py-[15px] px-3 border my-5 border-[#C2C5E1] ">
                <input className='text-Primary text-base font-Nunito outline-0 w-full' type="text" placeholder="First Name" />
              </div>
              <div className="py-[15px] px-3 border  border-[#C2C5E1] ">
                <input className='text-Primary text-base font-Nunito outline-0 w-full' type="text" placeholder="Last Name" />
              </div>
              <div className="py-[15px] px-3 border my-5 border-[#C2C5E1] ">
                <input
                  className="text-Primary text-base font-Nunito outline-0 w-full"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <p className="text-[#546375] text-base  font-Nunito">
                <input type="checkbox" /> I agree Terms & Conditoins All Policy
              </p>
              <Button
                className={"w-full mt-[28px]"}
                btnTxt={"Create Account"}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Loging
