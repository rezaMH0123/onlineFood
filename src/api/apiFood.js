import React, { useState } from "react";
import axios from "axios";
const BASE_URL = "http://food.nit.se.inolinx.com/api/";

const getFood = async () => {
  // const respons = await axios.get("https://food.nit.se.inolinx.com/api/food");
  // return respons;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let data = fetch("HTTPS://food.nit.se.inolinx.com/api/food/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("error", error));
  return data;
};

export { getFood };
