import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-information">
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
      </div>
      <div>
        <Row>
          <Col lg={6} xs={5}>
            <WeatherTemperature
              celsius={props.info.temperature}
              icon={props.info.icon}
              description={props.info.description}
            />
          </Col>

          <Col lg={6} xs={7}>
            <ul>
              <li className="pressure-text">
                <Row>
                  <Col lg={6} md={6} xs={6}>
                    Pressure:
                  </Col>
                  <Col lg={6} md={6} xs={6}>
                    <span className="pressure"> {props.info.pressure}</span>
                    <span className="pressure-param"> mb</span>
                  </Col>
                </Row>
              </li>

              <li>
                <Row>
                  <Col lg={6} md={6} xs={6}>
                    Humidity:
                  </Col>
                  <Col lg={6} md={6} xs={6}>
                    <span className="humidity"> {props.info.humidity}</span>
                    <span className="humidity-param">%</span>
                  </Col>
                </Row>
              </li>

              <li>
                <Row>
                  <Col lg={6} md={6} xs={6}>
                    Wind:
                  </Col>
                  <Col lg={6} md={6} xs={6}>
                    <span className="wind-speed"> {props.info.wind}</span>
                    <span className="wind-speed-param"> km/h</span>
                  </Col>
                </Row>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}
