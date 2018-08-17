import './Comment.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }

  render() {
    const { author, message } = this.props;

    return (
      <div className="Comment">
        <h4>{author}</h4>
        <div>{message}</div>
      </div>
    );
  }
}
