import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="main">
      <header>
        <p>{new Date().toString()}</p>
        <h1>My Tasks</h1>
      </header>
      <div className="content">
        <ul>
          <li>task 1</li>
          <li>task 2</li>
        </ul>
        <input/>
      </div>
    </div>
  );
}

export default App;
