/* eslint-disable react/jsx-filename-extension,react/prop-types */
import React from 'react';
import TodoList from './TodoList';
import './App.css';

const details = {
  header: 'Todoifier',
  headerColor: 'red',
};

const headerDisplay = ({
  header: title = 'Todo List',
  headerColor: color = 'blue',
}) => <h2 style={{ color }}>{title}</h2>;

const App = () => (
  <div className="App">
    {headerDisplay(details)}
    <br />
    <TodoList />
  </div>
);

export default App;
