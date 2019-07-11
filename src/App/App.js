/* eslint-disable react/jsx-filename-extension,react/prop-types */
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import TodoList from '../TodoList';

import './App.css';

const headerDisplay = title => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">{title}</NavbarBrand>
  </Navbar>
);

const headerTitle = 'Todoifier';

const App = () => (
  <div className="App">
    {headerDisplay(headerTitle)}
    <br />
    <TodoList />
  </div>
);

export default App;
