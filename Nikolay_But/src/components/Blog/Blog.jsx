import './Blog.scss';

import React from 'react';

export default function (props) {
  const {id, title, body} = props;

  return (
    <div className="Blogs__blog">
      <p className="title">ID {id}: {title}</p>
      <p className="body">{body}</p>
    </div>
  );
}

