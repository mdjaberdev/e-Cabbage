import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import Container from '../common/Container';

const Blog = () => {
  return (
    <section>
      <div className="bg-[url('/src/assets/commonBanner.png')] bg-no-repeat bg-cover bg-center py-37.5">
        <Container>
          <div className="">
            <h3 className="text-Primary text-[55px] font-bold font-Inter">
              Blog Page
            </h3>
            <h5 className="text-[#133344] text-[18px] font-Nunito flex items-center">
              Home <FaAngleRight /> Blog
            </h5>
          </div>
        </Container>
      </div>
      <div className="my-[120px]"></div>
    </section>
  );
}

export default Blog
