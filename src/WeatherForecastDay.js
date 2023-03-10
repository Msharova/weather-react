import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecast">
      <div className="weekDay">{day()}</div>
      <div className="weekIcon">
        <WeatherIcon
          code={props.data.weather[0].icon}
          alt={props.description}
          size={30}
        />
      </div>
      <div className="weekTemp">
        <span className="maxTemp condensed-text">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="minTemp condensed-text">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
