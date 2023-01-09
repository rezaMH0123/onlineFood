import React, { useState, createContext } from "react";

export const FoodContext = createContext();
export default function FoodContextProvider(props) {
  const [countOfBuy, setCountOfBuy] = useState(0);

  return (
    <FoodContext.Provider value={{ countOfBuy, setCountOfBuy }}>
      {props.children}
    </FoodContext.Provider>
  );
}
