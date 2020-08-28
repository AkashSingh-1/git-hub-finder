import React, { useState } from "react";
import { PropTypes } from "prop-types";

const Search = ({ alertfun, search, clearAll, clear }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("jj");
    if (value === "") {
      alertfun("please enter something", "ligght");
    } else {
      search(value);
      setValue("");
    }
  };
  const onClick = () => {
    clearAll();
  };

  return (
    <div className='search' onSubmit={onSubmit}>
      <form>
        <input
          type='text'
          placeholder='serch user....'
          name='input'
          onChange={onChange}
          value={value}
        ></input>
        <button className='btnn'>search</button>
      </form>
      {clear && (
        <button
          className='btnn'
          style={{ background: "rgba(4,5,6,0.4)" }}
          onClick={onClick}
        >
          clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  alertfun: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  clear: PropTypes.bool.isRequired,
};

export default Search;
