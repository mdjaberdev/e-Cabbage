import Container from "../common/Container";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Images from "../common/Images";
import topLogo from "/src/assets/topLogo.png";

const HeaderTop = () => {
  return (
    <div className="bg-[#0A472E] py-4 ">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex gap-x-2 text-white text-base font-Nunito">
            <p className="w-50">
              | Call :<br />
              +1 8008339780
            </p>
            <marquee>Welcome to Xprako! </marquee>
          </div>
          <div className="flex gap-x-4 items-center text-white text-2xl font-Nunito">
            <FaRegUser />
            <AiOutlineShoppingCart />
            <p>|</p>
            <div className="flex items-center gap-x-2">
              <Images className={"w-[25px] h-[25px]"} srcImg={topLogo} />
              <p>EN</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
