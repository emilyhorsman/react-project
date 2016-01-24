import React, { Component } from 'react';
import { render } from 'react-dom';

import UserGists from '../UserGists';

import './style.scss';

export default class App extends Component {
  render() {
    return <UserGists source="https://api.github.com/users/emilyhorsman/gists" />;
  }
}
