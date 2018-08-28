import './Comment.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Comment = function(props) {
  const { author, message, id, postId } = props;
  const postUrl = '/post/' + postId;

  return (
    <div className="comment">
      <h4>{author}</h4>
      <h5>Comment Id: {id} - <Link to={postUrl}>Post Id: {postId}</Link></h5>
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
