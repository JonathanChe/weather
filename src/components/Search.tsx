import * as React from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Search = (props):any => {
  const { handleChange } = props;

  return (
    <div id="search-bar-container">
      <SearchIcon id="search-icon" />
      <TextField
        fullWidth={true}
        placeholder="Search..."
        id="search-bar"
        autoFocus={true}
        InputProps={{"disableUnderline": true}}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
