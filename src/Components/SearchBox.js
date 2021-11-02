import React from "react";

const SearchBox = (props) => {
  return (
    <div className="mv4 w-100 w-50-m w-25-l mw6 center">
      <form onSubmit={event => props.onSubmit(event)}>
      <input
        className="pa3 ba b--green bg-lightst-blue center"
        type="search"
        placeholder="search movies"
        onChange={event => props.onChange(event.target.value)}
      />
      </form>
    </div>
  );
};

export default SearchBox;
