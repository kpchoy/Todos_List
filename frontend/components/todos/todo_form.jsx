import React, { Component } from 'react';
import { receiveTodo } from '../../actions/todo_actions';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateTitle(e) { 
    this.setState({title: e.currentTarget.value}, () => {
      console.log(this.state.title);
    });
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value}, () => {
      console.log(this.state.body);
    })
  }


  render() {

    return (
      <div>
        Todo Form
        <form>
          <p>Title:</p>
          <input type="text" onChange={this.updateTitle} value={this.state.title}/>

          <p>Body:</p>
          <textarea cols="30" rows="10" onChange={this.updateBody}
          value={this.state.body}
          ></textarea>

        </form>
      </div>
    );
  }
}
