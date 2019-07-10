/* eslint-disable react/jsx-filename-extension,react/prop-types */
import React from 'react';
import TodoList from './TodoList';
import './App.css';

const details = {
  header: 'Todoifier',
  headerColor: 'red',
};

const moreDetails = {
  ...details,
  header: 'Best Todoifier',
  background: 'black',
};

const headerDisplay = ({
  header: title = 'Todo List',
  headerColor: color = 'blue',
  background: background = 'none',
}) => <h2 style={{ color, background }}>{title}</h2>;

const App = () => (
  <div className="App">
    {headerDisplay(moreDetails)}
    <br />
    <TodoList />
  </div>
);

export default App;
