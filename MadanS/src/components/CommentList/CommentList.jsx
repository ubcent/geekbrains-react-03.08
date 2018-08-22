import './CommentList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from 'components/Comment';

export default class CommentList extends Component {
  static propTypes = {
      comments: PropTypes.arrayOf(
          PropTypes.shape({
              id: PropTypes.number.isRequired,
              author: PropTypes.string.isRequired,
              message: PropTypes.string.isRequired,
          })
      )
  };
  static defaultProps = {
      comments: [],
  };
  render() {
      const { comments, onLoadMore } = this.props;
    return (
      <ul className="CommentList">
          {comments.map((comment) => <li key={comment.id}><Link to={`/comments/${comment.id}`}>
              <Comment {...comment} /></Link></li>)}
      </ul>
    );
  }
}
  