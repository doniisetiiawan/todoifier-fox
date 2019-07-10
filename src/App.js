/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TodoList from './TodoList';
import './App.css';

const details = {
  header: 'Todoifier',
  headerColor: 'red',
};

// eslint-disable-next-line react/prop-types
const headerDisplay = ({ header: title, headerColor: color }) => (
  <h2 style={{ color }}>{title}</h2>
);

const App = () => (
  <div className="App">
    {headerDisplay(details)}
    <br />
    <TodoList />
  </div>
);

export default App;
