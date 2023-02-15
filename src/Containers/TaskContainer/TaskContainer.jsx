import React from 'react'
import "./TaskContainer.scss"
import Search from "../../Components/Search/Search"


const TaskContainer = (handleSearch, toDoTerm) => {
  return (
    <div className='taskContainer'>
      <Search handleSearch={handleSearch} toDoTerm={toDoTerm}/>
    </div>
  )
}

export default TaskContainer