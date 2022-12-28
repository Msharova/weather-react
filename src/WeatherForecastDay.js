import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.day * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecast">
      <div className="weather-forecast forecast">
        <Row>
          <Col>
            <div className="weekDay">{day()}</div>
            <div className="weekIcon">
              <img src={props.data.icon} alt={props.data.description}></img>
            </div>
            <div className="weekTemp">
              <span className="maxTemp">{props.data.max}°</span>
              <span className="minTemp">{props.data.min}</span>°
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
