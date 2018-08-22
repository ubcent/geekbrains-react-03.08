import './Comment.scss';

import React from 'react';

export default function (props) {
    const { author, message } = props;

    return (
        <div className="Comment">
            <h4>{author}</h4>
            <div>{message}</div>
        </div>
    );
}