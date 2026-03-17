import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";


const TodaysHotDeals = () => {
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "04/08/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));

        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0);
  })();
  return (
    <div className="bg-[url('/src/assets/todaysBnr.png')] bg-no-repeat bg-cover bg-center">
      <Container>
        <div className="ml-[650px] pt-50 pb-20">
          <h4 className="text-[#80B500] text-base font-Nunito font-bold">
            Todays Hot Deals
          </h4>
          <h3 className="text-Primary text-[50px] font-Inter font-bold leading-15 mt-2">
            Original Stock Honey Combo Package
          </h3>
          <p className="text-[#546375] text-base font-Nunito w-[450px] leading-5 mt-5">
            Cur tantas regiones barbarorum obiit, tot maria transmist summo bono
            fruitur id est voluptate barbarorum{" "}
          </p>
          <div className="flex gap-x-10 mt-10">
            <div className="text-center ">
              <div
                id="days"
                className="bg-white hover:bg-[#80B500] text-[#80B500] hover:text-white duration-200 w-15 h-15 flex items-center justify-center rounded-full text-[18px] font-Nunito font-bold"
              ></div>
              <h4 className="text-[#223645] text-base font-Inter">Days</h4>
            </div>
            <div className="text-center">
              <div
                id="hours"
                className="bg-white hover:bg-[#80B500] text-[#80B500] hover:text-white duration-200 h-15 w-15 flex items-center justify-center rounded-full text-[18px] font-Nunito font-bold"
              ></div>
              <h4 className="text-[#223645] text-base font-Inter">Houres</h4>
            </div>
            <div className="text-center">
              <div
                id="minutes"
                className="bg-white hover:bg-[#80B500] text-[#80B500] hover:text-white duration-200 h-15 w-15 flex items-center justify-center rounded-full text-[18px] font-Nunito font-bold"
              ></div>
              <h4 className="text-[#223645] text-base font-Inter">Minutes</h4>
            </div>
            <div className="text-center">
              <div
                id="seconds"
                className="bg-white hover:bg-[#80B500] text-[#80B500] hover:text-white duration-200 h-15 w-15 flex items-center justify-center rounded-full text-[18px] font-Nunito font-bold"
              ></div>
              <h4 className="text-[#223645] text-base font-Inter">Seconds</h4>
            </div>
          </div>
          <div className="mt-10 flex gap-5">
            <Button
              btnTxt={"Shop Now"}
              className={
                "hover:bg-transparent hover:text-[#80B500] duration-200"
              }
            />
            <Button
              btnTxt={"Deal of The Day"}
              className={
                "hover:bg-transparent hover:text-[#80B500] duration-200"
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TodaysHotDeals;
