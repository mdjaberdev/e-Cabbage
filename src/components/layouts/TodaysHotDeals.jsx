import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Button from "../common/Button";

const TodaysHotDeals = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    let nextYear = yyyy + 1;
    let dayMonth = "04/08/";
    let birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;

    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }

    const countDown = new Date(birthday).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDown - now;

      setTime({
        days: Math.floor(distance / day),
        hours: Math.floor((distance % day) / hour),
        minutes: Math.floor((distance % hour) / minute),
        seconds: Math.floor((distance % minute) / second),
      });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[url('/src/assets/todaysBnr.png')] bg-no-repeat bg-cover bg-center">
      <Container>
        <div
          className="
        lg:ml-162.5 
        pt-20 
        pb-20

        sm:pt-28

        lg:pt-50
        "
        >
          <h4
            className="
          text-[#80B500] 
          text-base 
          font-Nunito 
          font-bold
          "
          >
            Todays Hot Deals
          </h4>

          <h3
            className="
          text-Primary 
          text-3xl
          sm:text-4xl
          lg:text-[50px]
          font-Inter 
          font-bold 
          leading-10
          lg:leading-15
          mt-2
          "
          >
            Original Stock Honey Combo Package
          </h3>

          <p
            className="
          text-[#546375] 
          text-base 
          font-Nunito 
          w-full
          sm:w-[450px]
          lg:w-112.5
          leading-5 
          mt-5
          "
          >
            Cur tantas regiones barbarorum obiit, tot maria transmist summo bono
            fruitur id est voluptate barbarorum
          </p>

          {/* Countdown */}

          <div
            className="
          flex 
          flex-wrap
          gap-5
          sm:gap-x-10
          mt-10
          "
          >
            {[
              {
                value: time.days,
                label: "Days",
              },
              {
                value: time.hours,
                label: "Hours",
              },
              {
                value: time.minutes,
                label: "Minutes",
              },
              {
                value: time.seconds,
                label: "Seconds",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="
                  bg-white 
                  hover:bg-[#80B500] 
                  text-[#80B500] 
                  hover:text-white 
                  duration-200 

                  w-15
                  h-15

                  flex 
                  items-center 
                  justify-center 
                  rounded-full 

                  text-[18px] 
                  font-Nunito 
                  font-bold
                  "
                >
                  {item.value}
                </div>

                <h4
                  className="
                  text-[#223645] 
                  text-base 
                  font-Inter
                  "
                >
                  {item.label}
                </h4>
              </div>
            ))}
          </div>

          {/* Buttons */}

          <div
            className="
          mt-10 
          flex 
          flex-col
          sm:flex-row
          gap-5
          "
          >
            <Button
              btnTxt={"Shop Now"}
              className="
              hover:bg-transparent 
              hover:text-[#80B500] 
              duration-200
              "
            />

            <Button
              btnTxt={"Deal of The Day"}
              className="
              hover:bg-transparent 
              hover:text-[#80B500] 
              duration-200
              "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TodaysHotDeals;
