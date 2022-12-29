import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <Row className="weather-temperature WeatherTemperature">
        <Col lg={3} md={4} xs={4} className="special">
          <WeatherIcon
            className="main-icon"
            code={props.icon}
            alt={props.description}
            size={60}
          />
        </Col>
        <Col lg={2} md={4} xs={4} className="special">
          <span className="temperature">{Math.round(props.celsius)}</span>
        </Col>
        <Col lg={2} md={4} xs={4} className="units special">
          <span href="./" className="active">
            °C
          </span>
          |
          <a href="./" onClick={convertToFahrenheit}>
            °F
          </a>
        </Col>
        <Col lg={5} md={4} xs={4}></Col>
      </Row>
    );
  } else {
    return (
      <Row className="weather-temperature WeatherTemperature">
        <Col lg={3} md={4} xs={4} className="special">
          <WeatherIcon
            className="main-icon"
            code={props.icon}
            alt={props.description}
            size={60}
          />
        </Col>
        <Col lg={2} md={4} xs={4} className="special">
          <span className="temperature">{Math.round(fahrenheit())}</span>
        </Col>
        <Col lg={2} md={4} xs={4} className="units special">
          <a href="./" onClick={convertToCelcius}>
            °C
          </a>
          |
          <span href="./" className="active">
            °F
          </span>
        </Col>
        <Col lg={5} md={4} xs={4}></Col>
      </Row>
    );
  }
}
