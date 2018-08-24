import './Comment.scss';

import React from 'react';

export default function(props) {
  const {author, message} = props;

  return (
    <div className="Comment">
      <h4 className="author">{author}</h4>
      <div className="message">{message}</div>
    </div>
  );
}
