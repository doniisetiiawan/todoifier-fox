/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './Todo.module.css';

class Todo extends Component {
  static propTypes = {
    description: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      description: props.description,
      done: false,
    };
  }

  markAsDone = () => {
    this.setState({ done: true });
  };

  cssClasses = () => {
    let classes = [styles.todo];
    const { done } = this.state;
    if (done) {
      classes = [...classes, styles.done];
    }
    return classes.join(' ');
  };

  removeTodo = () => {
    // eslint-disable-next-line react/prop-types
    const { removeTodo: removeTodo1, description } = this.props;
    removeTodo1(description);
  };

  render() {
    const { description } = this.state;
    return (
      <div className={this.cssClasses()}>
        {description}
        <hr className={styles.redDivider} />
        <button
          type="button"
          className="MarkDone"
          onClick={this.markAsDone}
        >Mark as Done
        </button>
        <button
          type="button"
          className="RemoveTodo"
          onClick={this.removeTodo}
        >Remove Me
        </button>
      </div>
    );
  }
}

export default Todo;
