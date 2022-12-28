import React, { useState } from "react";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setLoaded(true);
    setForecast({
      response: response.data.daily,
      day: response.data.daily[0].time,
      icon: response.data.daily[0].condition.icon_url,
      description: response.data.daily[0].condition.description,
      max: Math.round(response.data.daily[0].temperature.maximum),
      min: Math.round(response.data.daily[0].temperature.minimum),
    });
  }

  if (loaded) {
    console.log(forecast);
    return <WeatherForecastDay data={forecast} />;
  } else {
    let apiKey = `70bb37b84aobtb35a69f8896391b01b3`;

    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
