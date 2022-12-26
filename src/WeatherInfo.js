import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-information justify-content-lg-center">
        <Row className="">
          <Col lg={9} md={9} xs={6}>
            <div className="overview">
              <h1 className="city">{props.info.name}</h1>
              <ul>
                <li className="date">
                  Last updated: <FormattedDate date={props.info.date} />
                </li>
                <li className="description text-capitalize">
                  {props.info.description}
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={3} xs={6}>
            <Button className="your-location-button" variant="success">
              Your location
            </Button>{" "}
          </Col>
        </Row>
      </div>
      <Row>
        <Col lg={6} xs={6}>
          <WeatherTemperature
            celsius={props.info.temperature}
            icon={props.info.icon}
            description={props.info.description}
          />
        </Col>
        <Col lg={6} xs={6}>
          <ul>
            <li className="pressure-text">
              Pressure: <span className="pressure"> {props.info.pressure}</span>
              <span className="pressure-param"> mb</span>
            </li>

            <li>
              Humidity: <span className="humidity"> {props.info.humidity}</span>
              <span className="humidity-param">%</span>
            </li>

            <li>
              Wind: <span className="wind-speed"> {props.info.wind}</span>
              <span className="wind-speed-param"> km/h</span>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
