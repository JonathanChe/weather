import * as React from 'react';

import Search from './Search';
import Weather from './Weather';
import Results from './Results';

interface Props {
  woeid: number,
  city: string,
  todaysWeather: object,
  fiveDayForecast: Array<object>,
  selected: boolean,
  searchResults: Array<object>,
  loading: boolean,
  handleChange: Function,
}

const View = (props: Props) => {
  const {
    handleChange,
    woeid,
    city,
    todaysWeather,
    fiveDayForecast,
    selected,
    searchResults,
    loading
  } = props;

  return (
    <main id="container">
      <Search
        handleChange={handleChange}
      />
      <Results
        searchResults={searchResults}
      />
      <Weather />
    </main>
  )
};

export default View;
