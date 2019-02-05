import * as React from 'react';
import { convertCeliusToFahrenheit } from '../../helpers';
import Forecast from './Forecast';

class Weather extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { fetchSelected, woeid } = this.props;
    fetchSelected(woeid);
  }

  render() {
    const {
      city,
      fiveDayForecast,
      todaysWeather: {
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
          <h1>{city}</h1>
          <h2>{weatherName}</h2>
          <h3>
            {convertCeliusToFahrenheit(temp)}F
          </h3>
        </div>
        <div className="weather-container">
          <h1>Forecast</h1>
          <div className="details-container">
            <Forecast weather={fiveDayForecast[0]}/>
            <Forecast weather={fiveDayForecast[1]}/>
            <Forecast weather={fiveDayForecast[2]}/>
            <Forecast weather={fiveDayForecast[3]}/>
            <Forecast weather={fiveDayForecast[4]}/>
          </div>
        </div>
        <div className="weather-container">
          <h1>Details</h1>
          <div className="details-container">
            <span>Humidity: {humidity}</span>
            <span>Wind Speed: {Math.floor(windSpeed)}</span>
            <span>Wind Direction: {Math.floor(windDirection)}</span>
            <span>Minimum Temp: {convertCeliusToFahrenheit(minTemp)}F</span>
            <span>Max Temp: {convertCeliusToFahrenheit(maxTemp)}F</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Weather;
