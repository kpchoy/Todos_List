import React, { Component } from 'react';
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_form';

export default class todoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {receiveTodo} = this.props;

    const todos = this.props.todos.map((todo) => (
      
        <TodoListItem 
          key={todo.id}
          todo={todo}
          receiveTodo={receiveTodo}
        />
      
      )
    );
    return (
      <div>
        <h1>Todo List goes here!</h1>
        <ul>
          {todos}
        </ul>

        <h2>Todo Form</h2>
        < TodoListForm receiveTodo={receiveTodo}/>
      </div>
    )
  }
}
