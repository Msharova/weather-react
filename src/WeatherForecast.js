import React, { useState } from "react";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast([
      {
        response: response.data.daily,
        day: response.data.daily[0].dt,
        icon: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
        description: response.data.daily[0].weather[0].description,
        max: Math.round(response.data.daily[0].temp.max),
        min: Math.round(response.data.daily[0].temp.min),
      },
    ]);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast forecast">
        <div className="row">
          {forecast.map(function(forecastDaily, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={forecastDaily} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = `cabdbda40038ba7d1165b953b1c7bd6c`;

    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
