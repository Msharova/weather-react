import React from "react";

export default function WeatherForecastDay(props) {
  console.log(props);
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
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={props.data.weather[0].description}
        />
      </div>
      <div className="weekTemp">
        <span className="maxTemp">{Math.round(props.data.temp.max)}°</span>
        <span className="minTemp">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
