/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Todo from './Todo';
import './App.css';

const App = () => (
  <div className="App">
    <h2>Todoifier</h2>
    <br />
    <Todo description="Do the thing" />
    <Todo description="Do another thing" />
  </div>
);

export default App;
