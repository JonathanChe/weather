import * as React from 'react';
import axios from 'axios';

class Weather extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);

    // axios.post('http://localhost:3000/getWeather', { input })
    //   .then(data => this.setState({
    //     searchResults: data,
    //     loading: false,
    //   }))
    //   .catch(err => console.error('error fetching weather ', err))
  }

  render() {
    return(
      <div id="weather">
        Weather
      </div>
    )
  }
}

export default Weather;
