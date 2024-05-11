import React from "react";
import Header from "./components/Header.jsx";
import ToDoItems from "./components/ToDoItems.jsx";
import Button from "./components/Button.jsx";
import "./index.css";
function App() {
  return (
    <div className="todo-container">
      <Header />
      <ToDoItems />
      <ToDoItems />
      <ToDoItems />
      <ToDoItems />
      <ToDoItems />
      <ToDoItems />
      <ToDoItems />
      <ToDoItems />
      <Button />
    </div>
  );
}

export default App;
