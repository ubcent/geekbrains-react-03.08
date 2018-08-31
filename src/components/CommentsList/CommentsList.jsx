import './CommentsList.scss';

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Comment from 'components/Comment';

export default class CommentsList extends PureComponent {
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
    const { comments, onLoadMore } = this.props;
    return (
      <Fragment>
        <ul className="CommentsList">
          {comments.map((comment) => <li key={comment.id}><Link to={`/comments/${comment.id}`}><Comment {...comment} /></Link></li>)}
        </ul>
        <button onClick={onLoadMore}>Load more</button>
      </Fragment>
    );
  }
}
