import React, { Component } from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: ['Item #1', 'Item #2', 'Item #3'] };
  }

  addTodo = (item) => {
    const { items } = this.state;
    this.setState({ items: [...items, item] });
  };

  removeTodo = (removeItem) => {
    const { items } = this.state;
    const filteredItems = items.filter(
      description => description !== removeItem,
    );
    this.setState({ items: filteredItems });
  };

  renderItems() {
    const { items } = this.state;
    return items.map(description => (
      <Todo
        key={description}
        description={description}
        removeTodo={this.removeTodo}
      />
    ));
  }

  render() {
    return (
      <div className="TodoList">
        <NewTodo addTodo={this.addTodo} />
        {this.renderItems()}
      </div>
    );
  }
}

export default TodoList;
