import React, { Component } from 'react';
import ListItems from './ListItems';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  EditList = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.EditList}>
          <h2>Add TODO</h2>
          <input type="text" onChange={(e) => this.setState({text: e.target.value})} placeholder="Information"/>
          <button>Add</button>
        </form>
        <button>Show Completed</button>
        <button>Show Not Completed</button>
        {this.props.items.map(e => <ListItems key={e.date} info={e}/>)}
      </div>
    );
  }
} 

export default List;