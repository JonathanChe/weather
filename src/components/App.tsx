import * as React from "react";

import View from './View';

interface AppStateTypes {
  woeid: number,
  city: string,
  todaysWeather: object,
  fiveDayForecast: Array<object>,
  selected: boolean,
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
    }
  }

  render() {
    return (
      <div id="wallpaper">
        <View />
      </div>
    );
  }
}

export default App;
