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

  componentDidMount = async () => {
    const res = await fetch(
      'http://localhost:4000/api/todos',
      { accept: 'application/json' },
    );
    const json = await res.json();
    this.setState(
      { items: json.todos, loaded: true },
    );
  };

  addTodo = async (description) => {
    const res = await fetch(
      'http://localhost:4000/api/todos', {
        method: 'POST',
        headers: { accept: 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify({ description, critical: false, done: false }),
      },
    );
    if (res.status === 200) {
      const { items } = this.state;
      const newItem = {
        id: items.length + 1,
        description,
        done: false,
        critical: false,
      };
      this.setState({
        items: [...items, newItem],
      });
    }
  };

  removeTodo = async (description) => {
    const res = await fetch(
      `http://localhost:4000/api/todos/${description}`, {
        method: 'DELETE',
        headers: { accept: 'application/json', 'content-type': 'application/json' },
      },
    );
    if (res.status === 200) {
      const { items } = this.state;
      const filteredItems = items.filter(
        todo => todo.description !== description,
      );
      this.setState({ items: filteredItems });
    }
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
