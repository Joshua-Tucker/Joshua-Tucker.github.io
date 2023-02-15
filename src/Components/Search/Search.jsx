import React from "react";
import "./Search.scss"


const Search = ({handleSearch, toDoTerm}) => {
    return (
      <div className="search">
      <input className="search__input"
        id="searchBar"
        type="text"
        placeholder="Add your next task here..."
        value={toDoTerm}
        onInput={handleSearch}
      />

      
      </div>
    );
  };
  
  export default Search;