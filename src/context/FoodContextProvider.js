import React, { useState, createContext } from "react";

export const FoodContext = createContext();
const foods = [
  {
    id: 1,
    foodName: "بستنی جلاتو",
    addres: "طهران",
    price: 45000,
    Ncomment: 60,
    discount: "40",
  },
  {
    id: 2,
    foodName: "همبرگر ذغالی",
    addres: "جردن",
    price: 96000,
    Ncomment: 680,
    discount: "25",
  },
  {
    id: 3,
    foodName: "دیزی",
    addres: "ولیعصر",
    price: 100000,
    Ncomment: 700,
    discount: "70",
  },
  {
    id: 4,
    foodName: "پیتزا",
    addres: "یزد",
    price: 250000,
    Ncomment: 325,
    discount: "26",
  },
  {
    id: 5,
    foodName: "کباب ",
    addres: "اصفهان",
    price: 35000,
    Ncomment: 310,
    discount: "60",
  },
  {
    id: 6,
    foodName: "فست فود عربی",
    addres: "شیراز",
    price: 70000,
    Ncomment: 270,
    discount: "10",
  },
];
export default function FoodContextProvider(props) {
  const initialState = [
    // { foodName: "پیتزا", count: 1 },
    // { foodName: "دیزی", count: 2 },
  ];
  const [buyFood, setBuyFood] = useState(initialState);
  const [totalCount, setTotalCount] = useState(0);

  return (
    <FoodContext.Provider
      value={{ buyFood, setBuyFood, totalCount, setTotalCount, foods }}
    >
      {props.children}
    </FoodContext.Provider>
  );
}
