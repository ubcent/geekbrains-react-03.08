import './Comment.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
    static propTypes = {
        author: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    };

    static defaultProps = {};

    render() {
        const {author, message} = this.props;
        return (
            <div className="Comment">
                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                <div className="media-body">
                    <h5 className="mt-0">
                        <strong>{author}</strong>
                    </h5>
                    <p> {message}</p>
                </div>
            </div>
        )
    }
}