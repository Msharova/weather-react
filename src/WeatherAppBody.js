import React from "react";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherAppBody() {
  return (
    <div className="WeatherAppBody">
      <div className="weather-app">
        <form className="mb-4">
          <Row>
            <Col lg={9} xs={8}>
              <input
                type="search"
                placeholder="Enter city name..."
                className="form-control"
                autoComplete="off"
              />
            </Col>
            <Col lg={3} xs={4} className="d-grid">
              <Button variant="primary">Search</Button>{" "}
            </Col>
          </Row>
        </form>

        <div className="city-information justify-content-lg-center">
          <Row className="">
            <Col lg={9} xs={6}>
              <div className="overview">
                <h1 className="city">Brno</h1>
                <ul>
                  <li className="date">Last updated: Wednesday 14:20</li>
                  <li className="description">Light rain</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <Button className="your-location-button" variant="success">
                Your location
              </Button>{" "}
            </Col>
          </Row>
        </div>

        <Row>
          <Col lg={6} xs={6}>
            <div className="d-flex weather-temperature">
              <Row>
                <Col lg={4} xs={4}>
                  <img
                    src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                    alt="light rain"
                  />
                </Col>
                <Col lg={4} xs={4} className="text-right">
                  <span className="temperature">0</span>
                </Col>
                <Col lg={4} xs={4} className="units">
                  <a href="./" className="active">
                    °C
                  </a>
                  |<a href="./">°F</a>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6} xs={6}>
            <ul>
              <li className="pressure-text">
                Pressure: <span className="pressure"> 0</span>
                <span className="pressure-param"> mb</span>
              </li>

              <li>
                Humidity: <span className="humidity"> 0</span>
                <span className="humidity-param">%</span>
              </li>

              <li>
                Wind: <span className="wind-speed"> 0</span>
                <span className="wind-speed-param"> km/h</span>
              </li>
            </ul>
          </Col>
        </Row>

        <div className="weather-forecast forecast border">
          Forecast is coming...
        </div>
      </div>
    </div>
  );
}
