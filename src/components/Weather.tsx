import * as React from 'react';
import axios from 'axios';

class Weather extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { fetchSelected, woeid } = this.props;
    fetchSelected(woeid);
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
