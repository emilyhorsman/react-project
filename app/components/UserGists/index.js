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
    fetch(this.props.source)
      .then(response => response.json())
      .then(data => data[0])
      .then(lastGist => {
          this.setState({
            username: lastGist.owner.login,
            lastGistUrl: lastGist.html_url
          });
        })
      ;
  }

  render() {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }

    return (
      <div>
      {this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
}
