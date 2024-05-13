import React from "react";

import Header from "./components/Header.jsx";
import ToDoItems from "./components/ToDoItems.jsx";

import "./index.css";

function App() {
  return (
    <div className="todo-container">
      <Header header="ToDoie App" />
      <ToDoItems />

      
    </div>
  );
}

export default App;
