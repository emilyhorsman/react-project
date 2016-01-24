import React, { Component } from 'react';
import { render } from 'react-dom';

import TodoList from '../TodoList';

import './style.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
  }

  onChange(elm) {
    this.setState({ text: elm.target.value });
  }

  handleSubmit(elm) {
    elm.preventDefault();
    const nextItems = this.state.items.concat([{
      text: this.state.text,
      id: Date.now()
    }]);

    const nextText = '';
    this.setState({ items: nextItems, text: nextText });
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.onChange.bind(this)} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}
