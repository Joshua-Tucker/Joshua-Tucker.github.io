import React from "react";
import "./Body.scss";
import List from "../List/List";
import Nav from "../Nav/Nav";

const Body = ({handleSearch, toDoTerm, handleSubmit}) => {
  return (
    <div className="body">
     
      <Nav />
      <List  handleSearch={handleSearch} toDoTerm={toDoTerm} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Body;
