import React, { useEffect, useRef } from "react";
import mixitup from "mixitup";
import productImg from "/src/assets/products.png";
import Container from "../common/Container";
import Button from "../common/Button";
import Products from "../common/Products";
import Badge from "../common/Badge";

const Ourproducts = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      mixitup(containerRef.current, {
        animation: {
          duration: 400,
        },
        selectors: {
          target: ".mix",
        },
      });
    }
  });
  return (
    <div className="my-20">
      <Container>
        <div className="text-center">
          <h3 className="text-Primary text-5xl font-bold font-Inter ">
            Our Products
          </h3>
          <p className="text-[#546375] text-base font-Rubik mt-4">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>
        <div className="flex gap-x-10 justify-center mt-10">
          <Button
            data-filter="*"
            className={
              "[&.mixitup-control-active]:bg-white [&.mixitup-control-active]:text-[#223645] rounded-4xl duration-150"
            }
            btnTxt={"Food & Drinks"}
          />
          <Button
            data-filter=".vegetables"
            className={
              "[&.mixitup-control-active]:bg-white [&.mixitup-control-active]:text-[#223645] rounded-4xl duration-150"
            }
            btnTxt={"vegetables"}
          />
          <Button
            data-filter=".dried"
            className={
              "[&.mixitup-control-active]:bg-white [&.mixitup-control-active]:text-[#223645] rounded-4xl duration-150"
            }
            btnTxt={"Dried Foods"}
          />
          <Button
            data-filter=".brek"
            className={
              "[&.mixitup-control-active]:bg-white [&.mixitup-control-active]:text-[#223645] rounded-4xl duration-150"
            }
            btnTxt={"Bread & Cake"}
          />
          <Button
            data-filter=".fish"
            className={
              "[&.mixitup-control-active]:bg-white [&.mixitup-control-active]:text-[#223645] rounded-4xl duration-150"
            }
            btnTxt={"Fish & meat"}
          />
        </div>
        <div className="grid grid-cols-4 justify-center gap-4 mt-10" ref={containerRef}>
          <div className="mix food">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Juicy Orange Pack"}
              productPrice={"$19.00"}
            />
          </div>
          <div className="mix fish">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"syzygium malacce"}
              productPrice={"$19.00"}
            />
          </div>
          <div className="mix dried relative">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Dried Fruit Mix"}
              productPrice={"$19.00"}
            />
            <Badge badgeTxt={"-20%"} />
          </div>
          <div className="mix food">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Brown Apples"}
              productPrice={"$19.00"}
            />
          </div>
          <div className="mix dried ">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Dried Fruit Mix"}
              productPrice={"$19.00"}
            />
          </div>
          <div className="mix vegetables ">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Tomato Fruits"}
              productPrice={"$19.00"}
            />
          </div>
          <div className="mix dried ">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Dragon Fruits"}
              productPrice={"$19.00"}
            />
          </div>
          <div className="mix brek ">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Yellow papyaa"}
              productPrice={"$19.00"}
            />
          </div>
        </div>

        {/* <div className="flex gap-x-4 mt-10" ref={containerRef}>
            <div className="mix food">
              <Products />
            </div>
            <div className="mix vegetables">
              <Products />
            </div>
            <div className="mix dried">
              <Products />
            </div>
            <div className="mix fish">
              <Products />
            </div>
        
        </div> */}
      </Container>
    </div>
  );
};

export default Ourproducts;
