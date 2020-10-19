import React from "react";
import { InputAdornment, Input } from '@material-ui/core';
import { FaSistrix } from "react-icons/fa";

const SearchTab = () => {
  return (
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <FaSistrix /> 
          </InputAdornment>
        }
      />
    );
}

export default SearchTab;