import React from 'react'
import "./TaskContainer.scss"
import Search from "../../Components/Search/Search"
import PlusButton from "../../assets/images/plus.png"



const TaskContainer = ({handleSearch, toDoTerm, handleSubmit}) => {
  return (
    <div className='taskContainer'>
      <Search handleSearch={handleSearch} toDoTerm={toDoTerm}/>
      <img onClick={handleSubmit} src={PlusButton} alt="plusButton"/>

    </div>
  )
}

export default TaskContainer