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
  selectCity: Function,
  fetchSelected: Function,
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
    loading,
    selectCity,
    fetchSelected,
  } = props;

  return (
    <main id="container">
      <Search
        handleChange={handleChange}
      />
      {selected ? (
        <Weather
          woeid={woeid}
          fetchSelected={fetchSelected}
          todaysWeather={todaysWeather}
          fiveDayForecast={fiveDayForecast}
        />
        ) : (
          <Results
            searchResults={searchResults}
            selectCity={selectCity}
          />
      )}
    </main>
  )
};

export default View;
