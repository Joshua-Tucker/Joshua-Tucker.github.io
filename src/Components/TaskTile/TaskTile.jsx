import React from "react";
import dustbin from "../../assets/images/dustbin.png";
import "./TaskTile.scss";

const TaskTile = ({ task, checkbox, toggleCheck }) => {
  return (
    <div className="taskTile">
      <input
        className="tasktile__checkbox"
        type="checkbox"
        onClick={toggleCheck}
      />
      <h2 className="tasktile__task">Task</h2>

      <img className="tasktile__delete" src={dustbin} alt="deleteTask" />
    </div>
  );
};

export default TaskTile;
