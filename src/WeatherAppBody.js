import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherAppBody(props) {
  const [ready, setReady] = useState(false);
  const [search, setSearch] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});

  function showCityInfo(response) {
    setReady(true);

    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function citySearch(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  if (ready) {
    return (
      <div className="WeatherAppBody">
        <div className="weather-app">
          <form className="mb-4" onSubmit={handleSubmit}>
            <Row>
              <Col lg={9} xs={8}>
                <input
                  type="search"
                  placeholder="Enter city name..."
                  className="form-control"
                  autoComplete="off"
                  onChange={citySearch}
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
                  <h1 className="city">{weather.name}</h1>
                  <ul>
                    <li className="date">Last updated: Wednesday 14:20</li>
                    <li className="description">{weather.description}</li>
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
                    <span className="temperature">
                      {Math.round(weather.temperature)}
                    </span>
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
                  Pressure:{" "}
                  <span className="pressure"> {weather.pressure}</span>
                  <span className="pressure-param"> mb</span>
                </li>

                <li>
                  Humidity:{" "}
                  <span className="humidity"> {weather.humidity}</span>
                  <span className="humidity-param">%</span>
                </li>

                <li>
                  Wind: <span className="wind-speed"> {weather.wind}</span>
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
  } else {
    let apiKey = `aa27af19e16f8ee065d7861dff9b21a6`;
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(showCityInfo);
    return "Loading";
  }
}
