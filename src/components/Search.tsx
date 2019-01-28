import * as React from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

interface StyleProps {
  root: object,
  input: object,
  iconButton: object,
  divider: object,
}

const Search = ({ classes }: StyleProps) => {
  return (
    <div>
      <SearchIcon />
      <TextField
        fullWidth={true}
        placeholder="Search..."
      />
    </div>
  );
};

export default withStyles(styles)(Search);
