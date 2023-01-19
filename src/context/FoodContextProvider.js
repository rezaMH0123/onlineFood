import React, { useState, createContext, useEffect } from "react";
import { getFood } from "../api/apiFood";

export const FoodContext = createContext();
// const foods = [
//   {
//     id: 1,
//     foodName: "بستنی جلاتو",
//     addres: "طهران",
//     price: 45000,
//     Ncomment: 60,
//     discount: "40",
//   },
//   {
//     id: 2,
//     foodName: "همبرگر ذغالی",
//     addres: "جردن",
//     price: 96000,
//     Ncomment: 680,
//     discount: "25",
//   },
//   {
//     id: 3,
//     foodName: "دیزی",
//     addres: "ولیعصر",
//     price: 100000,
//     Ncomment: 700,
//     discount: "70",
//   },
//   {
//     id: 4,
//     foodName: "پیتزا",
//     addres: "یزد",
//     price: 250000,
//     Ncomment: 325,
//     discount: "26",
//   },
//   {
//     id: 5,
//     foodName: "کباب ",
//     addres: "اصفهان",
//     price: 35000,
//     Ncomment: 310,
//     discount: "60",
//   },
//   {
//     id: 6,
//     foodName: "فست فود عربی",
//     addres: "شیراز",
//     price: 70000,
//     Ncomment: 270,
//     discount: "10",
//   },
// ];

export default function FoodContextProvider(props) {
  const [buyFood, setBuyFood] = useState([]);
  const [allfoods, setAllFoods] = useState([]);
  const [lodding, setLodding] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getFood();
      if (data.results) {
        setLodding(true);
      }
      data.results.map((item) =>
        setAllFoods((current) => [
          ...current,
          {
            id: item.id,
            foodName: item.name,
            discount: item.off_percent,
            Ncomment: item.views,
            price: item.price,
            picture: item.picture,
            addres: "طهران",
          },
        ])
      );
    };
    fetchAPI();
  }, []);
  console.log(allfoods);
  return (
    <FoodContext.Provider
      value={{
        lodding,
        buyFood,
        setBuyFood,
        totalCount,
        setTotalCount,
        foods: allfoods,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
}
