import React from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}`
    );
  }

  let apiKey = `aa27af19e16f8ee065d7861dff9b21a6`;
  let units = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(handleResponse);
  return (
    <div className="Weather">
      <h2>Here will be my amazing app</h2>
      <Rings color="#00BFFF" height={80} width={80} />
    </div>
  );
}
