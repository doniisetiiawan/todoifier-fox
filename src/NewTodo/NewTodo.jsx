import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { item: '' };
  }

   handleUpdate = (event) => {
     this.setState({ item: event.target.value });
   };

   addTodo = () => {
     // eslint-disable-next-line react/prop-types
     const { addTodo: addTodo1 } = this.props;
     const { item } = this.state;
     addTodo1(item);
     this.setState({ item: '' });
   };

   render() {
     const { item } = this.state;
     return (
       <div className="NewTodo">
         <input
           type="text"
           onChange={this.handleUpdate}
           value={item}
         />
        &nbsp;&nbsp;
         <button type="button" onClick={this.addTodo}>Add</button>
       </div>
     );
   }
}

export default NewTodo;
