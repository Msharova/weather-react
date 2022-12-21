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

        <div className="city-information">
          <div className="overview">
            <h1 className="city">Brno</h1>
            <ul>
              <li className="date">Last updated: Wednesday 14:20</li>
              <li className="description">Light rain</li>
            </ul>
          </div>
          <div className="your-location-button">
            <Button variant="success">Your location</Button>{" "}
          </div>
        </div>

        <div className="CurrentCityParameters row">
          <div className="col-6">
            <div className="CurrentCityTemperature d-flex weather-temperature">
              <div className="row">
                <div className="col-4">
                  <img src="" alt="" id="icon" />
                </div>
                <div className="text-right col-4" id="temperature-text">
                  <span id="temperature"></span>
                </div>
                <div className="text-left col-4" id="units-text">
                  <span className="Units">
                    <a href="./" className="active">
                      °C
                    </a>
                    |<a href="./">°F</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="Indicators col-6">
            <ul>
              <div className="Pressure">
                <li className="pressure-text">
                  Pressure: <span className="pressure"> 0</span>
                  <span className="pressure-param"> mb</span>
                </li>
              </div>
              <div className="Humidity">
                <li>
                  Humidity: <span className="humidity"> 0</span>
                  <span className="humidity-param">%</span>
                </li>
              </div>
              <div className="Wind">
                <li>
                  Wind: <span className="wind-speed"> 0</span>
                  <span className="wind-speed-param"> km/h</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="Forecast">
          <div className="weather-forecast forecast"></div>
        </div>
      </div>
    </div>
  );
}
