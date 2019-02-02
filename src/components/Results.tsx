import * as React from 'react';

import Result from './Result';

interface Props {
  searchResults: resultTypes
}

interface resultTypes {
  [propName: string]: any;
}

const Results = (props: Props) => {
  const { searchResults } = props;
  let data;
  let results;

  if (searchResults.hasOwnProperty('data')) {
    data = searchResults.data;
  }

  if (data) {
    results = data.map(result => (
      <Result city={result.title} key={result.woeid} id={result.woeid} />
    ))
  }

  return (
    <div>
      {results}
    </div>
  )
};

export default Results;
