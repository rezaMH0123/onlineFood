import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import SingleFood from "./components/SingleFood";
import FoodContextProvider from "./context/FoodContextProvider";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

function App() {
  return (
    <FoodContextProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/food/:id" element={<SingleFood />} />
      </Routes>
    </FoodContextProvider>
  );
}

export default App;
