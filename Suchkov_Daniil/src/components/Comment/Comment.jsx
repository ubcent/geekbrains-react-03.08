import './Comment.scss';

import React from 'react';
import PropTypes from 'prop-types';

export default function(props) {
    const { author, message } = props;

    return (
        <div className="Comment">
            <h4 className="Author">Author:{author}</h4>
            <div className="Message">Message:{message}</div>
        </div>
    );
}
    