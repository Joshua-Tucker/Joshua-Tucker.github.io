import React from "react";
import { useState } from "react";
import TaskTile from "./Components/TaskTile/TaskTile" ;
import Body from "./Containers/Body/Body"
import "./App.scss";

function App() {

  const [toDoTerm, setToDoTerm] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    console.log(searchTerm)
    setToDoTerm(searchTerm);
  }

  const handleCheck = (event) => {
    const isChecked =event.target.checked
  }
 
   


  return (
    <div className="App">
      <Body toDoTerm={toDoTerm} handleSearch={handleSearch}/>
    </div>
  );
}


export default App;
