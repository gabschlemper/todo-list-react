import React, { useState } from 'react';
import './App.scss';

function App() {
  const todoInicial = [
    {
      id: 1,
      title: "learn english",
      completed: false,
      trash: false, 
    },
    {
      id: 2,
      title: "clean the house",
      completed: false,
      trash: false, 
    }
  ];
  const [todo, setTodo] = useState(todoInicial);
  const [nextTask, setNextTask] = useState("q");

  const listItems = todo.map((task) =>
    <li key={task.id}>{task.title}</li>
  );

  return (
    <div className="main">
      <header>
        <p>{new Date().toString()}</p>
        <h1>My Tasks</h1>
      </header>
      <div className="content">
        <ul>
          {listItems}
        </ul>
        <input
          type=""
          value={nextTask}
          onChange={e => setNextTask(e.target.value)}
        />
        <button
          onClick={()=> {
            const newTask = {
              id: 3,
              title: nextTask,
              completed: false,
              trash: false,
            }
            setTodo([...todo, newTask])
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
