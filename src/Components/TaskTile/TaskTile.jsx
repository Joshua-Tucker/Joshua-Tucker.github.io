import React from "react";
import dustbin from "../../assets/images/dustbin.png"
import "./TaskTile.scss"

const TaskTile = (task, checkbox) => {
    return (
      <div className="TaskTile">
        <input type="checkbox"/>
       <h2>Task</h2>
       <img src={dustbin} alt="deleteTask"/>
      
      </div>
    );
  };
  
  export default TaskTile;