import * as React from "react";

import View from './View';

const debounce = require('lodash.debounce');
const axios = require('axios');

interface AppStateTypes {
  woeid: number,
  city: string,
  todaysWeather: object,
  fiveDayForecast: Array<object>,
  selected: boolean,
  searchResults: Array<object>,
  loading: boolean,
}

class App extends React.Component<any, AppStateTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      woeid: 0,
      city: '',
      todaysWeather: {},
      fiveDayForecast: [],
      selected: false,
      searchResults: [],
      loading: false,
    }
    this.fetchResults = debounce(this.fetchResults, 1000);
  }

  handleChange = (e) => {
    this.fetchResults(e.target.value);
  }

  fetchResults = async (input) => {
    await this.setState({ loading: true })
    axios.post('http://localhost:3000/getWeather', { input })
      .then(data => this.setState({
        searchResults: data,
        loading: false,
      }))
      .catch(err => console.error('error fetching weather ', err))
  }

  fetchSelected = async (woeid) => {
    await this.toggleLoad();
    axios.post('http://localhost:3000/selected', { woeid })
      .then(data => {
        const { data: { "consolidated_weather": weather } }:any = data;
        this.setState({
          loading: false,
          todaysWeather: weather[0],
          fiveDayForecast: weather.slice(1),
        });
      })
      .catch(err => console.error('error fetching weather ', err))
  }

  selectCity = (e) => {
    this.setState({ selected: true, woeid: e.target.id });
  }

  toggleLoad = () => {
    this.setState(prevState => this.setState({ loading: !prevState.loading }))
  }

  render() {
    const {
      woeid,
      city,
      todaysWeather,
      fiveDayForecast,
      selected,
      searchResults,
      loading,
    } = this.state;

    return (
      <div id="wallpaper">
        <View
          handleChange={this.handleChange}
          woeid={woeid}
          city={city}
          todaysWeather={todaysWeather}
          fiveDayForecast={fiveDayForecast}
          selected={selected}
          searchResults={searchResults}
          loading={loading}
          selectCity={this.selectCity}
          fetchSelected={this.fetchSelected}
        />
      </div>
    );
  }
}

export default App;
