import './Blogger.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const postsUrl = '/posts/' + id;
    const commentsUrl = '/comments/' + id;
    const userUrl = '/blogger/' + id;

    return (
      <tr className="blogger">
        <td><Link className="blogger-name" to={userUrl}>{name}</Link></td>
        <td><Link className="blogger-name" to={userUrl}>{username}</Link></td>
        <td>{posts.length ? <Link to={postsUrl}>{posts.length}</Link> : 0 }</td>
        <td>{comments.length ? <Link to={commentsUrl}>{comments.length}</Link> : 0 }</td>
      </tr>
    );
  }
}
