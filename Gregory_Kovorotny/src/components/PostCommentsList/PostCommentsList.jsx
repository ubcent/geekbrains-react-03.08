import './PostCommentsList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostComment from 'components/PostComment';

export default class PostCommentsList extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
      })
    )
  }

  static defaultProps = {
    comments: [],
  }

  render() {
    const { comments } = this.props;
    return (
      <ul className="post-comments-list">
        {comments.map((comment) => <li><PostComment {...comment} /></li>)}
      </ul>
    );
  }
}
