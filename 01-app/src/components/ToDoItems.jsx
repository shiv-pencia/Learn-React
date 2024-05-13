import React, { useState } from "react";

function ToDoItems() {
  const [todos, setTodos] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  function addTodo(e){
    e.preventDefault()
    setTodos([...todos,inputvalue])
  }
  function handleChange(e){
    setInputValue(e.target.value)
    
  }

  return (
    <div>
      <form>
        <input
          className="input-div"
          type="text"
          value = {inputvalue}
          placeholder="inter your todo here "
          onChange={handleChange}
          
        
        />
        <button onClick={addTodo} className="todo-btn">
          Add ToDo
        </button>
      </form>
      <ul>
      {todos.map((todo) => (
          <li key={Math.random()}>{todo}
           <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoItems;
