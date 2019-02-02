import * as React from 'react';

import Search from './Search';
import Weather from './Weather';
import Results from './Results';

const View = (props):any => {
  const { handleChange } = props;

  return (
    <main id="container">
      <Search 
        handleChange={handleChange}
      />
      <Weather />
      <Results />
    </main>
  )
};

export default View;
