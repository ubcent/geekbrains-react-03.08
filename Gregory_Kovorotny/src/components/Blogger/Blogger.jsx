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
    const postsUrl = '#/posts/' + id;
    const commentsUrl = '#/comments/' + id;

    return (
      <tr className="blogger">
        <td>{name}</td>
        <td>{username}</td>
        <td>{posts.length ? <a href={postsUrl}>{posts.length}</a> : 0 }</td>
        <td>{comments.length ? <a href={commentsUrl}>{comments.length}</a> : 0 }</td>
      </tr>
    );
  }
}
