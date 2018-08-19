import './Blogger.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Blogger extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    posts: PropTypes.arrayOf(PropTypes.number),
    comments: PropTypes.arrayOf(PropTypes.number),
  }

  static defaultProps = {
    posts: [],
    comments: [],
  }

  render() {
    const { id, name, username, posts, comments } = this.props;

    return (
      <tr className="blogger">
        <td>{name}</td>
        <td>{username}</td>
        <td>{posts.length ? <a href="#">{posts.length}</a> : 0 }</td>
        <td>{comments.length ? <a href="#">{comments.length}</a> : 0 }</td>
      </tr>
    );
  }
}
