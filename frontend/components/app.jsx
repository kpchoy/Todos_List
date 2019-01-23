import React, { Component } from 'react';
import TodoListContainer from './todos/todo_list_container';

export default class app extends Component {
  render() {
    return (
      <div>
        <h1>app component</h1>
        <TodoListContainer />
      </div>
    );
  }
}
