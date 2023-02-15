import React from "react";
import { useState } from "react";

import Body from "./Containers/Body/Body"
import "./App.scss";

function App() {

  const [toDoTerm, setToDoTerm] = useState(" ");

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setToDoTerm(searchTerm);
  }

   


  return (
    <div className="App">
      <Body toDoTerm={toDoTerm} handleSearch={handleSearch}/>
    
    </div>
  );
}


export default App;
