import React, { useState } from "react";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setLoaded(true);
    console.log(response.data.daily);
    setForecast({
      response: response.data.daily,
      day: response.data.daily[0].dt,
      icon: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
      description: response.data.daily[0].weather[0].description,
      max: Math.round(response.data.daily[0].temp.max),
      min: Math.round(response.data.daily[0].temp.min),
    });
  }

  if (loaded) {
    //console.log(forecast);
    return <WeatherForecastDay data={forecast} />;
  } else {
    let apiKey = `99b8f9330a1bfba3a85e523fd3c2e528`;

    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
