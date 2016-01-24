import React, { Component } from 'react';
import { render } from 'react-dom';

export default class UserGists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      lastGistUrl: ''
    };
  }

  componentDidMount() {
    $.get(this.props.source, (result) => {
      const lastGist = result[0];
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    });
  }

  render() {
    return (
      <div>
      {this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
}
