import * as React from 'react';
import axios from 'axios';
import { convertCeliusToFahrenheit } from '../../helpers';

class Weather extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { fetchSelected, woeid } = this.props;
    fetchSelected(woeid);
  }

  render() {
    const { todaysWeather: {
      "weather_state_name": weatherName,
      "weather_state_abbr": weatherAbbr,
      "wind_direction": windDirection,
      "wind_speed": windSpeed,
      "the_temp": temp,
      "min_temp": minTemp,
      "max_temp": maxTemp,
      "humidity": humidity
    } } = this.props;

    console.log(this.props);
    return (
      <div id="weather">
        <div id="title-container">
          <div>{weatherName}</div>
          <div>
            {convertCeliusToFahrenheit(temp)}
          </div>
        </div>
        <div className="weather-container">
          <h1>Forecast</h1>
        </div>
        <div className="weather-container">
          <h1>Details</h1>
          <div id="details-icon-container">
            Icon
          </div>
          <div id="details-container">
            <span>Humidity: {humidity}</span>
            <span>Wind Speed: {windSpeed}</span>
            <span>Wind Direction: {windDirection}</span>
            <span>Minimum Temp: {minTemp}</span>
            <span>Max Temp: {maxTemp}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Weather;
