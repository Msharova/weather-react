import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.day * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecast border">
      <div className="weekDay">{day()}</div>
      <div className="weekIcon">
        <img src={props.data.icon} alt={props.data.description}></img>
      </div>
      <div className="weekTemp">
        <span className="maxTemp">{props.data.max}°</span>
        <span className="minTemp">{props.data.min}°</span>
      </div>
    </div>
  );
}
