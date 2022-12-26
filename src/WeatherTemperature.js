import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function WeatherTemperature(props) {
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
            <a href="./" className="active">
              °C
            </a>
            |<a href="./">°F</a>
          </Col>
        </Row>
      </div>
    </span>
  );
}
