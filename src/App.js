import React, { useState } from 'react';
import './App.scss';
import { MdHighlightOff, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import moment from 'moment';

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
        <p>{moment().format("MMM Do YYYY")}</p>
        <h1>My Tasks</h1>
      </header>
      <div className="content">
        <ul>
          {todo.filter(item => item.trash === false).map((task) =>
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              {task.completed ? (
                <MdCheckBox className='checked'/> 
              ) : (
                <MdCheckBoxOutlineBlank className='unchecked'
                onClick={e => {
                  const index = todo.findIndex(item => item.id === task.id);
                  const newTodo = [...todo]
                  newTodo[index] = {
                    ...newTodo[index],
                    completed: true
                  }
                  setTodo(newTodo)
                }}
                />
              )}
              {task.title}
              <MdHighlightOff className='trash'
                onClick={e => {
                  const index = todo.findIndex(item => item.id === task.id);
                  const newTodo = [...todo]
                  newTodo[index] = {
                    ...newTodo[index],
                    trash: true
                  }
                  setTodo(newTodo)
                }}
              />
            </li>
          )}
        </ul>
        <input
          placeholder="New task..."
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
