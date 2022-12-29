import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherAppBody(props) {
  const [search, setSearch] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function showCityInfo(response) {
    setWeather({
      ready: true,
      name: response.data.name,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      //icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function newSearch() {
    let apiKey = `aa27af19e16f8ee065d7861dff9b21a6`;
    let units = `metric`;
    let city = search;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(showCityInfo);
  }

  function handleSubmit(event) {
    event.preventDefault();
    newSearch();
  }

  function citySearch(event) {
    setSearch(event.target.value);
  }
  function localSearch(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = `aa27af19e16f8ee065d7861dff9b21a6`;
    let units = `metric`;
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiUrlLocal = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrlLocal).then(showCityInfo);
  }
  function localPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(localSearch);
  }

  if (weather.ready) {
    return (
      <div className="WeatherAppBody">
        <div className="weather-app">
          <form className="" onSubmit={handleSubmit}>
            <Row>
              <Col lg={9} md={9} xs={7}>
                <input
                  type="search"
                  placeholder="Enter city name..."
                  className="form-control"
                  autoComplete="off"
                  onChange={citySearch}
                />
              </Col>

              <Col lg={3} md={3} xs={5}>
                <Col lg={12} className="d-grid mb-1">
                  <Button variant="primary" onClick={handleSubmit}>
                    Search
                  </Button>
                </Col>

                <Col lg={12}>
                  <Button
                    className="your-location-button d-grid w-100"
                    variant="success"
                    onClick={localPosition}
                  >
                    Your location
                  </Button>
                </Col>
              </Col>
            </Row>
          </form>

          <WeatherInfo info={weather} />
          <WeatherForecast coordinates={weather.coord} />
        </div>
      </div>
    );
  } else {
    newSearch();
    return "Loading";
  }
}
