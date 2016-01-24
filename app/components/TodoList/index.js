import React, { Component } from 'react';
import { render } from 'react-dom';

export default class TodoList extends Component {
  render() {
    function createItem(item) {
      return <li key={item.id}>{item.text}</li>;
    }

    return <ul>{this.props.items.map(createItem)}</ul>;
  }
}
