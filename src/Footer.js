import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/Msharova/weather-react"
        target="_blank"
        rel="noreferrer noopener"
        className="footer source-link"
      >
        Open-source code
      </a>
      , by
      <a
        href="https://www.linkedin.com/in/maria-sharova-2b8b9b185/"
        target="_blank"
        rel="noreferrer noopener"
        className="footer"
      >
        <span></span> Maria Sharova
      </a>{" "}
      , hosted on{" "}
      <a
        href="https://maria-sharova-react-weather.netlify.app/"
        target="_blank"
        rel="noreferrer noopener"
        className="footer"
      >
        <span></span> Netlify
      </a>
    </div>
  );
}
