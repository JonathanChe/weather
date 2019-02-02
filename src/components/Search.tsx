import * as React from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Search = (props):any => {
  return (
    <div id="search-bar-container">
      <SearchIcon id="search-icon" />
      <TextField
        fullWidth={true}
        placeholder="Search..."
        id="search-bar"
        autoFocus={true}
        InputProps={{"disableUnderline": true}}
      />
    </div>
  );
};

export default Search;
