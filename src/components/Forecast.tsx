import * as React from 'react';

const Forecast = ({ weather }) => {
  console.log(weather);
  return (
    <div className="forecast">
      <span>Date: </span>
      <span>Min Temp:  </span>
      <span>Max Temp:  </span>
      <br />
    </div>
  )
};

export default Forecast;
