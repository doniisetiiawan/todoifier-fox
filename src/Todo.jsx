import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
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
    let classes = ['Todo'];
    const { done } = this.state;
    if (done) {
      classes = [...classes, 'Done'];
    }
    return classes.join(' ');
  };

  render() {
    const { description } = this.state;
    return (
      <div className={this.cssClasses()}>
        {description}
        <br />
        <button
          type="button"
          onClick={this.markAsDone}
        >Mark as Done
        </button>
      </div>
    );
  }
}

export default Todo;
