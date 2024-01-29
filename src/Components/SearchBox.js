import React from "react";
import { BsSearch } from "react-icons/bs";



const SearchBox = (props) => {
  return (
   <div className="mv4 w-90 w-45-m w-20-l mw6 center relative">
      <form onSubmit={event => props.onSubmit(event)}>
        <div className="flex items-center">
          <input
            className="pa3 ba b--green bg-lightst-blue center flex-grow-1"
            type="search"
            placeholder="search movies"
            onChange={event => props.onChange(event.target.value)}
          />
          <button
            type="submit"
            className="pa3 bg-lightst-blue ba b--green pointer absolute right-0"
          >
            <BsSearch className="fas fa-search"></BsSearch>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
