import { useState } from 'react';
import './ToDo.css';

function App() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleClick = () => {
    setTodo([...todo, value]);
    setValue(""); 
  };
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <div className="input-container">
        <input
          type="text" placeholder="Enter your task"
          onChange={(e) => setValue(e.target.value)}value={value}
        />
        <button onClick={handleClick}>Add Task</button>
      </div>
      <div className="todo-list-container">
          <ul>
             {todo.map((task,index) => (
            <li key={index}>{task}</li>
            ))},
          </ul>
        </div>
      </div>
    );
  }
  
  export default App;