import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.scss';

export default class App extends Component {
  render() {
    return <h1>Hello {this.props.foo}</h1>;
  }
}
