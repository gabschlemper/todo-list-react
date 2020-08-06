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
      id: 1,
      title: "clean the house",
      completed: false,
      trash: false, 
    }
  ];
  const [todo, setTodo] = useState(todoInicial);
  
  const listItems = todo.map((objeto) =>
    <li>{objeto.title}</li>
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
        <input/>
      </div>
    </div>
  );
}

export default App;
