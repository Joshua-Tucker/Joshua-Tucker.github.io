import React from "react";
import "./Search.scss"
import PlusButton from "../../assets/images/plus.png"


const Search = (handleSearch, toDoTerm) => {
    return (
      <div className="search">
      <input className="search__input"
        id="searchBar"
        type="text"
        placeholder="Add your next task here..."
        value={toDoTerm}
        onInput={handleSearch}
      />
      <img src={PlusButton} alt="plusButton"/>

      
      </div>
    );
  };
  
  export default Search;