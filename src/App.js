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
  const [nextTask, setNextTask] = useState("");

  return (
    <div className="main">
      <header>
        <p>{new Date().toString()}</p>
        <h1>My Tasks</h1>
      </header>
      <div className="content">
        <ul>
          {todo.map((task) =>
            <li key={task.id}>
              {task.title}
              <button
                onClick={e => {
                  const index = todo.findIndex(item => item.id === task.id);
                  const newTodo = [...todo]
                  newTodo[index] = {
                    ...newTodo[index],
                    trash: true
                  }
                  setTodo(newTodo)
                }}
                >Remove</button>
            </li>
          )}
        </ul>
        <input
          type=""
          value={nextTask}
          onChange={e => setNextTask(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter' || e.keyCode === 13) {
              const newTask = {
                id: 3,
                title: nextTask,
                completed: false,
                trash: false,
              }
              setTodo([...todo, newTask])
              setNextTask("")
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
