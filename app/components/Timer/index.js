import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  tick() {
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
        <div>Seconds elapsed: {this.state.secondsElapsed}</div>
    );
  }
}
