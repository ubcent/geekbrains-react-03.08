import './LoginButton.css';

import React, { Component } from 'react';

export default class LoginButton extends Component {

  render() {
    const { text } = this.props;

    return (
      <button id="loginButton" className="btn btn-sm btn-secondary">{text}</button>
    );
  }
}
