import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecast weather-forecast forecast">
      <Row>
        <Col>
          <div className="weekDay">{props.day}</div>
          <div className="weekIcon">
            <img src={props.icon} alt={props.description}></img>
          </div>
          <div className="weekTemp">
            <span className="weekTempDay">{props.max}°</span>
            {props.min}°
          </div>
        </Col>
      </Row>
    </div>
  );
}
