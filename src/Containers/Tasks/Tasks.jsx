import React from "react";
import "./Tasks.scss";
import TaskContainer from "../TaskContainer/TaskContainer";

const Tasks = (handleSearch, toDoTerm) => {
  return (
    <div className="tasks">
      <TaskContainer toDoTerm={toDoTerm} handleSearch={handleSearch} />
    </div>
  );
};

export default Tasks;
