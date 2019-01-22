import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodo, receiveTodos} from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;

  const newTodos = [
    {
      id: 1,
      title: 'mod car',
      body: 'fire',
      done: false
    },
    {
      id: 2,
      title: 'whipping',
      body: 'krispy creme whip',
      done: true
    },
  ];

  console.log(store.getState()); // should return default state object
  store.dispatch(receiveTodo({ id: 3, title: 'New Todo' }));
  console.log(store.getState()); // should include the newly added todo
  store.dispatch(receiveTodos(newTodos));
  console.log(store.getState()); // should return only the new todos

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Todos app</h1>, root);
});
