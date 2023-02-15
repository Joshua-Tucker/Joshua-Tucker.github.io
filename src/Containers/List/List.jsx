import React from "react";
import "./List.scss";
import TaskTile from "../../Components/TaskTile/TaskTile";
import { useState } from "react";
import TaskContainer from "../TaskContainer/TaskContainer";

const List = ({ handleSearch, toDoTerm, handleSubmit }) => {
  const [showChecked, setShowChecked] = useState("");

  // const toggleCheck=()=>{
  //   setShowChecked(`<del>${task}</del>`);
  // }

const handleSubmit = ()=> {
  return(
    console.log("get me to the list")
  )

}

  return (
    <div className="list">
      <div className="tasks">
        <TaskContainer
          handleSubmit={handleSubmit}
          toDoTerm={toDoTerm}
          handleSearch={handleSearch}
        />
      </div>
      <TaskTile />
    </div>
  );


export default List;
