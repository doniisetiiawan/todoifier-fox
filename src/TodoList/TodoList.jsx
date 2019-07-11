import React, { Component, Fragment } from 'react';
import Todo from '../Todo';
import NewTodo from '../NewTodo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    const [item1, item2, ...rest] = [
      'Write some code',
      'Change the world',
      'Take a nap',
      'Eat a cookie',
    ];
    this.state = {
      items: [item1, item2, rest.join(' and ')],
    };
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
      <Fragment key={`item-${description}`}>
        <Todo
          key={description}
          description={description}
          removeTodo={this.removeTodo}
        />
      </Fragment>
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
