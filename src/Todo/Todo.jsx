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
      critical: false,
    };
  }

  markAsDone = () => {
    this.setState({ done: true });
  };

  cssClasses = () => {
    let classes = [];
    const { critical, done } = this.state;
    if (critical) {
      classes = [styles.critical];
    } else {
      classes = [styles.todo];
    }
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

  markCritical = () => {
    this.setState({ critical: true });
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
        <button
          type="button"
          className="MarkCritical"
          onClick={this.markCritical}
        >Mark as Critical
        </button>
      </div>
    );
  }
}

export default Todo;
