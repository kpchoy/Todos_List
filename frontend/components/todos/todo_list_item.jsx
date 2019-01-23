import React, { Component } from 'react'

export default class todo_list_item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {id, title, body, done} = this.props.todo;

    return (
      <li key={id}>
        <h3>Title: {title}</h3>
        <p>Body: {body}</p>
        <p>Done: {done}</p>
      </li>
    )
  }
}
