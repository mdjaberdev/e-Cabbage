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
    
    </section>
  );
}

export default Loging
