import './CommentsList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from 'components/Comment';

export default class CommentsList extends Component {
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

  render() { // TODO - сделать пагинацию
    const { comments } = this.props;
    return (
      <ul className="comments-list">
        {comments.map((comment) => <li><Comment {...comment} /></li>)}
      </ul>
    );
  }
}
