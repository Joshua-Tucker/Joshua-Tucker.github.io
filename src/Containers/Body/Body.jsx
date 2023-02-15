import React from "react";
import "./Body.scss";
import List from "../List/List";
import Tasks from "../Tasks/Tasks";
import Nav from "../Nav/Nav";

const Body = (handleSearch, toDoTerm) => {
  return (
    <div className="body">
     
      <Nav />
      <Tasks handleSearch={handleSearch} toDoTerm={toDoTerm}/>
      <List />
    </div>
  );
};

export default Body;
