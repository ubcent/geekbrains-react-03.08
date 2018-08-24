import './PostView.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostCommentsListContainer from 'containers/PostCommentsListContainer';

export default class PostView extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    author: PropTypes.string.isRequired,
  }

  static defaultProps = {}

  render() {
    const { id, imgUrl, title, body, date, author } = this.props;

    return (
      <div className="post-view mt-4">
        <h1>{title}</h1>
        <hr />
        <p>{date.toISOString()}</p>
        <hr />
        <img className="img-fluid rounded" src={imgUrl} alt="post image 900x300" />
        <hr />
        <p>{body}</p>
        <hr />
        <PostCommentsListContainer postId={id} />
      </div>
    );
  }
}
