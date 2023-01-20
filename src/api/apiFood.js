import React, { useState } from "react";
import axios from "axios";
const BASE_URL = "http://37.32.26.144/api/";

const getFood = async () => {
  // const respons = await axios.get("https://food.nit.se.inolinx.com/api/food");
  // return respons;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let data = fetch("HTTP://37.32.26.114/api/food/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("error", error));
  return data;
};

export { getFood };
