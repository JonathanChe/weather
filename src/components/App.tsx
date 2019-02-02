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

  render() {
    return (
      <div id="wallpaper">
        <View
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
