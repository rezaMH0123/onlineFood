import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import SingleFood from "./components/SingleFood";
import FoodContextProvider from "./context/FoodContextProvider";

function App() {
  return (
    <FoodContextProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/food/:id" element={<SingleFood />} />
      </Routes>
    </FoodContextProvider>
  );
}

export default App;
