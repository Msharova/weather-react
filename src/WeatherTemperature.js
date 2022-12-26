import React, { useState } from "react";

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
      <span className="WeatherTemperature">
        <div className="d-flex weather-temperature">
          <Row>
            <Col lg={4} xs={4}>
              <img src={props.icon} alt={props.description} />
            </Col>
            <Col lg={4} xs={4} className="text-right">
              <span className="temperature">{Math.round(props.celsius)}</span>
            </Col>
            <Col lg={4} xs={4} className="units">
              <span href="./" className="active">
                °C
              </span>
              |
              <a href="./" onClick={convertToFahrenheit}>
                °F
              </a>
            </Col>
          </Row>
        </div>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <div className="d-flex weather-temperature">
          <Row>
            <Col lg={4} xs={4}>
              <img src={props.icon} alt={props.description} />
            </Col>
            <Col lg={4} xs={4} className="text-right">
              <span className="temperature">{Math.round(fahrenheit())}</span>
            </Col>
            <Col lg={4} xs={4} className="units">
              <a href="./" onClick={convertToCelcius}>
                °C
              </a>
              |
              <span href="./" className="active">
                °F
              </span>
            </Col>
          </Row>
        </div>
      </span>
    );
  }
}
