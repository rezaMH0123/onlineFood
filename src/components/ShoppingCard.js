import React, { useState, useContext, useEffect, useRef } from "react";
import cardEmpty from "../assets/icons/fig-cart-empty.png";
import { FoodContext } from "../context/FoodContextProvider";
export default function ShoppingCard({ singleFood }) {
  const foodContext = useContext(FoodContext);
  const totalDiscount = () => {
    const discountPrices = foodContext.buyFood.map((item) => {
      return (item.price * item.count * item.discount) / 100;
    });
    const totaldiscountPrices = discountPrices.reduce(
      (total, price) => total + price,
      0
    );
    return totaldiscountPrices;
  };
  const totalPayment = () => {
    const Prices = foodContext.buyFood.map((item) => {
      return item.price * item.count;
    });
    const totalPrice = Prices.reduce((total, price) => total + price, 0);
    return totalPrice;
  };
  const buyFoodOnclick = (props) => {
    if (props.do === "add") {
      foodContext.buyFood.map(() => {
        foodContext.setBuyFood((current) =>
          current.map((obj) => {
            if (obj.foodName === props.foodName) {
              return { ...obj, count: props.count + 1 };
            }
            return obj;
          })
        );
      });
    } else {
      if (props.count - 1 !== 0) {
        foodContext.buyFood.map(() => {
          foodContext.setBuyFood((current) =>
            current.map((obj) => {
              if (obj.foodName === props.foodName) {
                return { ...obj, count: props.count - 1 };
              }
              return obj;
            })
          );
        });
      } else {
        const filterFood = foodContext.buyFood.filter(
          (item) => item.foodName !== props.foodName
        );
        foodContext.setBuyFood([...filterFood]);
      }
    }
  };
  useEffect(() => {
    var totalCount = 0;
    if (foodContext.buyFood.length > 0) {
      foodContext.buyFood.map((item) => {
        totalCount += item.count;
        foodContext.setTotalCount(totalCount);
      });
    } else {
      foodContext.setTotalCount(0);
    }
  }, [foodContext.buyFood]);
  return (
    <div className="w-full h-fit">
      {foodContext.buyFood == 0 ? (
        <div className="text-center">
          <img className="mt-4" alt="emptyCard" src={cardEmpty} />
          <span className="text-center text-lg text-[#ccc ]">
            سبد خرید خالی است
          </span>
        </div>
      ) : (
        <div className="w-full h-fit md:mt-0  mt-16">
          <div className="w-full h-fit">
            {foodContext.buyFood.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-row-reverse border-t border-gray-300 h-16 mb-2"
              >
                <div className="w-4/6 flex flex-col items-end p-2 ">
                  <p className="font-bold text-lg">{item.foodName}</p>
                  <div className="flex flex-row-reverse gap-1">
                    <span>{item.price}</span>
                    <p>تومان</p>
                  </div>
                </div>
                <div className="w-2/6 flex justify-center gap-2 items-center ">
                  <div
                    onClick={() =>
                      buyFoodOnclick({
                        do: "minus",
                        foodName: item.foodName,
                        count: item.count,
                      })
                    }
                    className="minus border flex justify-center items-center border-red-500 rounded-full w-6 h-6 cursor-pointer"
                  >
                    <img
                      alt="img"
                      className="w-full"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nO3OsQkAMAwEsZ/R+0+SJpnCwQYJrr8EAJjoVN2O9gwAAPnoAVTncv0aWtuxAAAAAElFTkSuQmCC"
                    />
                  </div>
                  <span>{item.count}</span>
                  <div
                    onClick={() =>
                      buyFoodOnclick({
                        do: "add",
                        foodName: item.foodName,
                        count: item.count,
                      })
                    }
                    className="plus border flex justify-center items-center border-red-500 rounded-full w-6 h-6 cursor-pointer"
                  >
                    <img
                      alt="img"
                      className="w-[90%]"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAASUlEQVR4nO2WwQkAIAwDM2P2nySfiuAAPioi3kG/pdAkRAJ4mdg1hwPEC24RRGhs6DNBlLW4e945YBdEGGxogsg0ovq7EwKogQFNoNuFGh/nywAAAABJRU5ErkJggg=="
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="discount flex flex-row-reverse border-t border-gray-300 h-16">
              <div className="flex-1 text-right flex items-center justify-end p-2">
                <p className="text-red-600 text-lg">تخفیف</p>
              </div>
              <div className="flex-1 flex flex-row-reverse justify-end  items-center p-2">
                <div className="flex gap-1">
                  <p>تومان</p>
                  <p>{totalDiscount()}</p>
                </div>
              </div>
            </div>
            <div className="totalPrice  border-t border-gray-300 h-16">
              <div className="flex flex-row-reverse">
                <div className="flex-1 text-lg flex justify-end p-1 mt-1 font-bold">
                  هزینه کل
                </div>
                <div className="flex-1 flex flex-row-reverse justify-end  items-center p-2">
                  <div className="flex gap-1 relative text-[#888]">
                    <p>تومان</p>
                    <p>{totalPayment()}</p>
                    <hr
                      style={{ transform: "rotateZ(-11deg)" }}
                      className="w-24 border-t-2 absolute top-3 -left-1 border-gray-400"
                    ></hr>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse justify-end pl-1 text-red-600 text-lg font-bold gap-1">
                <span>{totalPayment() - totalDiscount()}</span>
                <span>تومان</span>
              </div>
            </div>
            <div className="registratedBtn flex justify-center">
              <div className="w-64 mt-4 cursor-pointer  bg-red-500 h-fit p-3 flex justify-center items-center rounded-md text-white text-lg ">
                نهایی کردن سفارش
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
