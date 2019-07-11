import React, { Component, Fragment } from 'react';
import Todo from '../Todo';
import NewTodo from '../NewTodo';
import { createTodo, deleteTodo, fetchTodos } from '../TodoService';

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
    const { todos } = await fetchTodos();
    this.setState({ items: todos, loaded: true });
  }

  addTodo = async (description) => {
    const { status } = await createTodo(description);
    if (status === 200) {
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

  removeTodo = async (todoId) => {
    const { status } = await deleteTodo(todoId);
    if (status === 200) {
      const { items } = this.state;
      const filteredItems = items.filter(
        todo => todo.id !== todoId,
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
