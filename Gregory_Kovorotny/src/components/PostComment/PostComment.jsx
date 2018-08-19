import './PostComment.scss';

import React from 'react';
import PropTypes from 'prop-types';

const PostComment = (props) => {
  const { author, message, id, postId } = props;

  return (
    <div className="post-comment">
      <h4>{author}</h4>
      <h5>Comment Id: {id} - Post Id: {postId}</h5>
      <div>{message}</div>
    </div>
  );
}

PostComment.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
}

export default PostComment;
