import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import './style.scss';

export default class App extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
