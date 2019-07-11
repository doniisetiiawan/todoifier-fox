import React, { Component, Fragment } from 'react';
import Todo from '../Todo';
import NewTodo from '../NewTodo';

import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    const res = await fetch(
      'http://localhost:4000/api/todos',
      { accept: 'application/json' },
    );
    const json = await res.json();
    this.setState(
      { items: json.todos, loaded: true },
    );
  }

  addTodo = (description) => {
    const newItem = {
      description,
      done: false,
      critical: false,
    };
    const { items } = this.state;
    this.setState({
      items: [...items, newItem],
    });
  };

  removeTodo = (removeItem) => {
    const { items } = this.state;
    const filteredItems = items.filter(todo => todo.description !== removeItem);
    this.setState({ items: filteredItems });
  };

  renderItems = () => {
    const { loaded } = this.state;
    if (loaded) {
      const { items } = this.state;
      return items.map(todo => (
        <Fragment key={`item-${todo.description}`}>
          <Todo
            id={todo.id}
            key={todo.id}
            description={todo.description}
            removeTodo={this.removeTodo}
            done={todo.done}
            critical={todo.critical}
          />
        </Fragment>
      ));
    }
    return <p>Still Loading...</p>;
  };

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
