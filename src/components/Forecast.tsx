import * as React from 'react';
import { convertCeliusToFahrenheit } from '../../helpers';

const Forecast = ({ weather }) => {
  let minTemp;
  let maxTemp;
  let date;

  if (weather) {
    minTemp = (convertCeliusToFahrenheit(weather.min_temp));
    maxTemp = (convertCeliusToFahrenheit(weather.max_temp));
    date = weather.applicable_date;
  }
  return (
    <div className="forecast">
      <span>Date: {date} </span>
      <span>Min Temp: {minTemp}F </span>
      <span>Max Temp: {maxTemp}F </span>
      <br />
    </div>
  )
};

export default Forecast;
