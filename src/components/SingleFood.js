import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FoodContext } from "../context/FoodContextProvider";
const SingleFood = () => {
  const foodContext = useContext(FoodContext);
  //   const [countOfBuy, setCountOfBuy] = useState(0);

  const location = useLocation();
  const food = location.state.data;
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          className="h-[90%] md:w-[35%] w-[40%] rounded-lg bg-white relative"
        >
          <Link to="/cart">
            <div className="Cart-ico w-12 h-12 flex justify-center items-center cursor-pointer absolute top-3 left-2 rounded-full z-50 bg-red-600">
              <img
                className="w-[70%] h-[70%]"
                alt="cart-ico"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEe0lEQVR4nO2ba4hWZRCAJy3KNY1NCwq7md0lxKSofhSVEW5GblqGJWK6FZT6y270o/pjFELSxaCgjKgWS41EUCmpoKLotmxJkShFV0gqTVPrieHMYafTWb/1fOe857jne2B+7dl35r3PzDufSIsWLVo4gPOBroTMByYDo2QwAxwN7KZ/dgKPAsNlMAIMA7bRmE3AkTIYAYYDE4HznOi2mAt85QZhqdQNoB3YbAOgW+V4qRvATLcKFkndAI4AfrcBeFfqCPCyDcDfdd0G17lt8DXwIbAhIeuA7oSsAJ5OyFJgSULuBe5ysjjFN9FDeUZCrgGuSMhFdpDrwd6W1wC0ATs4+NiW5yC84hrW6/GbhPwE/OrkN8pHt+xReQ3AdNdwVxM+R7uTUcDYhIxP+CSTUpb51JTt4LfLz2ZnTy6dT9kG66Wi2MDqzCtP5N14tzW8FzhGKoitjpiZeTd+vWv8FqkgwCPOxhPybrzNbYN1UkGAD8y+LUUpWGkK9mg4LRVCI1azS3m+KCU3uCU2RyoEcKWzbV5RStrcNnhDKgTwkBuAM4pU9KrbBu1SEYC3zS71Aw4JFSLPlgoAHA7sMptWhjhs/jRlr0sFAC5xk7IwhMLXXKYoH3+7OXvudwMwMYTCG53CWYUrbGzPp2bLdmBoCIUj3J5bVbjCgecrngupeJUp1fNgRDDF/1+JO9ytdHZI5bMKCzz+q2ekdgy4XG8d4B5gOfCF0x/m8EsxLPPVY1fXycDFFtMvtGDmBXuM2WyvU434C7hTygBYY0bsjJ/Q1AkBjrO8nIantwIPAM8Ca4HPXdKiGb4DngLGldJ5BbjJGdQLfOsCkqxoQuN74CP1M4An7ZqbA1wFnFMZD5QojXUg6IH1JfCmZY01K7wA6AQuBMYAh8nBAlFKO+ZH4H27HZbZYTXbDq+zyropCgXosc5rFnik1AmimOCf4A5IVQBGu+W/ROoGMMR8b2Wj1BH6Xox0K0yRugGc6+599cgeBi5NvO4UJadIFQDmudeYkKjODqkCRGV16gmGZq5UCWCCRYldAUS9xyFl97lFbQGGAhdYRDgNOLGgIq3LgJuBqytTvkv0RJZWZbo2j+vJnKzFztHCPc0/U2omGri7wcn8SzO5OUuovNhAR28pOQGi9FUcAO2xYuopdvK/5QzsyZqeBm5z7Wy3sHqyVbFrLiHmpfx72ADL0GCD0JEyc3EViXJthva1ja0ueXJ6SoH3Z86GsRIS+lLQmwaQIXo8Q/unuf9/rJ9v9MCNmS+hIKryilm+nxmMM8XdGXRooWPM7f18c6b75j4JCfCHKX5nADO4LEP7pzZaQYmSvbC1SvQ9iiqdKX7Bavf3qRl1aOFl/OI0PiUL1euCoZOa7dMBYT+miCO/fZay7rSI8D3X+Y+z+uk6q64dXXEPWl3wAjc4ygopA2CRuwrT+EG3QpM69BFlf3xSahKWaEb8T2riJalVZGNyaF8P0ztSXpB2W8q9/N8wERk5wa6lDuDYAnQcag8mM8wZGnxvCy1atJBQ/AtMGzOPZyAwlgAAAABJRU5ErkJggg=="
              />
            </div>
          </Link>
          <div className="img w-full h-[45%]  rounded-lg">
            <img
              className="h-full w-full rounded-t-lg"
              alt={`${food.id}-food`}
              src={require("../assets/foods/discount/0.jpg")}
            />
          </div>
          <div className="text-right mt-4 mr-2 flex flex-row-reverse justify-between">
            <h1 className="text-2xl">{food.foodName}</h1>
            <span className="ml-3 text-xl text-red-700 font-bold flex flex-row-reverse gap-1">
              {`${96000}`}
              <p>تومان</p>
            </span>
          </div>
          <div className="information text-right p-4">
            <p className="text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
          <div className="border w-fit ml-4 p-3 rounded-md border-red-600 flex flex-row-reverse">
            <span className="inline-block px-2">زمان احتمالی آماده شدن</span>
            <p>45-25</p>
            <p className="px-2">دقیقه</p>
          </div>
          <div className="flex justify-end mr-4 mt-16 cursor-pointer">
            {foodContext.countOfBuy === 0 ? (
              <div
                onClick={() => foodContext.setCountOfBuy((prev) => prev + 1)}
                className="bg-red-500 p-4 rounded-md w-fit text-white"
              >
                خرید
              </div>
            ) : (
              <div className="flex flex-row-reverse gap-3">
                <div
                  onClick={() => foodContext.setCountOfBuy((prev) => prev + 1)}
                  className="addition flex justify-center items-center rounded-md bg-red-500 border border-red-500 w-8 h-8"
                >
                  <img
                    className="w=[70%] h-[70%]"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdklEQVR4nO3UQQrCMBBA0RzPuBDvv2hA60Iv8boRtF2I0E6oOA+yzYdJmFLSnuGMB+449QzfvIw9wzMZDmMhrrSQ4fKzo8YRzfYa6qfwRZxxl+GKISA64LDFX5hZfeG3Mlx6kW/8D6Nu78uhZ7ji+jzrN1IqgSYK2LXvCFcYxQAAAABJRU5ErkJggg=="
                  />
                </div>
                <span className="text-2xl">{foodContext.countOfBuy}</span>
                <div
                  onClick={() => foodContext.setCountOfBuy((prev) => prev - 1)}
                  className="minus flex justify-center items-center rounded-md bg-red-500 border border-red-500 w-8 h-8"
                >
                  <img
                    className="w=[70%] h-[70%]"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZUlEQVR4nO3RQRHAIBAAsfPvmaEO+l0GEguZAQAAAAAAAAAAAAAAAAB4wubPEtASEBMQExATEBMQExATEBMQExATEBMQExATEBMQExATEBMQE3B9AAAAAAAAAAAAAAAAAADAnOAD+Elqo9OChN4AAAAASUVORK5CYII="
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleFood;
