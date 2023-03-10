import React from "react";

export default function FormattedDate(props) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekDays[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes() + 3;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span className="FormattedDate">
      {day} {hours}:{minutes}
    </span>
  );
}
