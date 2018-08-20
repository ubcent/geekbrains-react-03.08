import './Comment.scss';

import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
  const { author, message, id, postId } = props;
  const postUrl = '#/post/' + postId;

  return (
    <div className="comment">
      <h4>{author}</h4>
      <h5>Comment Id: {id} - <a href={postUrl}>Post Id: {postId}</a></h5>
      <div>{message}</div>
    </div>
  );
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
}

export default Comment;
