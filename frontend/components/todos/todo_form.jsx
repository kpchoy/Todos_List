import React, { Component } from 'react';
import {uniqueId} from '../../util/id_generator';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false,
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) { 
    this.setState({title: e.currentTarget.value}, () => {
      console.log(this.state.title);
    });
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value}, () => {
      console.log(this.state.body);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, {id: uniqueId()});
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {

    return (


        <form onSubmit={this.handleSubmit}>
          <label>
          Title:
          <input type="text" onChange={this.updateTitle} value={this.state.title}/>
          </label>

          <label>
          Body:
          <textarea cols="30" rows="10" onChange={this.updateBody}
          value={this.state.body}
          ></textarea>
          </label>

          <button className="create-button">Create Todo!</button>
        </form>
      
    );
  }
}
