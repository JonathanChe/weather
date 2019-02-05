import * as React from 'react';

const Results = ({ city, id, selectCity }) => {

  return (
    <div className="result">
      <span
        id={id}
        data-city={city}
        onClick={selectCity}
      >
        {city}
      </span>
    </div>
  )
}

export default Results;