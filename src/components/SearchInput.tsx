import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField } from '@material-ui/core';
import colorConstant from '../constant/color';
import SearchIcon from '@material-ui/icons/Search';

interface SearchInputProps {
    onChange?: () => void,
    placeHolder?: string,
}
const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: '#fff',

        '& input': {
          padding: '12px 0',
          border: '0',
        },

        '& fieldset': {
          border: 'none',
        },

        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colorConstant.orange,
            paddingRight: '16px',
        }
    }
});

const SearchInput = ({ onChange, placeHolder }: SearchInputProps) => {
    const classes = useStyles();
    return (
        <TextField
          className={classes.root}
          id="outlined-number"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder={placeHolder}
          variant="outlined"
        />
    );
}

export default SearchInput;