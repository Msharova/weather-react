import React from "react";

//import Weather from "./Weather";
import Footer from "./Footer";
import WeatherAppBody from "./WeatherAppBody";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import "./App.css";

function App() {
  return (
    <Container fluid="md" className="App">
      <div className="weather-app-wrapper">
        <WeatherAppBody defaultCity={"Brno"} />
        <Footer />
      </div>
    </Container>
  );
}

export default App;
