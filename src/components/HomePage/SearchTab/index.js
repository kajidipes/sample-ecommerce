import React from "react";
//import { InputAdornment, Input } from '@material-ui/core';
import { FaSistrix } from "react-icons/fa";

const SearchTab = () => {
  return (
    // <div className="container">
      <form>
      <input type = "text" name="search" placeholder="search" />
      <button><FaSistrix className="fa"/> </button>
      </form>
    // </div>
      // <Input
      //   id="input-with-icon-adornment"
      //   startAdornment={
      //     <InputAdornment position="start">
      //       <FaSistrix /> 
      //     </InputAdornment>
      //   }
      // />
    );
}

export default SearchTab;