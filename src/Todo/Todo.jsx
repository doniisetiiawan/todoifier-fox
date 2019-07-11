/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import styles from './Todo.module.scss';

class Todo extends Component {
  static propTypes = {
    critical: PropTypes.bool,
    description: PropTypes.string,
    done: PropTypes.bool,
    id: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      done: props.done,
      critical: props.critical,
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
    const { removeTodo: removeTodo1, id } = this.props;
    removeTodo1(id);
  };

  markCritical = () => {
    this.setState({ critical: true });
  };

  render() {
    const { description } = this.props;
    return (
      <div className={this.cssClasses()}>
        {description}
        <br />
        <hr className={styles.hr} />
        <ButtonGroup>
          <Button
            className="MarkDone"
            onClick={this.markAsDone}
            color="success"
          >
            Mark as Done
          </Button>
          <Button
            className="RemoveTodo"
            onClick={this.removeTodo}
            color="warning"
          >
            Remove Me
          </Button>
          <Button
            className="MarkCritical"
            onClick={this.markCritical}
            color="danger"
          >
            Mark as Critical
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Todo;
