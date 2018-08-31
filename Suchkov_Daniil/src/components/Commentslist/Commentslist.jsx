import './Commentslist.scss';
import PropTypes from 'prop-types';

import React, { Component } from 'react';

import Comment from 'components/Comment';
    
export default class Commentslist extends Component {
    static propTypes = {
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                author: PropTypes.string.isRequired,
                message: PropTypes.string.isRequired,
            })
        )
    }
    static defaultProps = {
        comments: [],
    }
    render() {
        const { comments } = this.props;
        return (
            <ul className="Commentslist">
                {comments.map((comment) => <li><Comment {...comment} /></li>)}
            </ul>
        );
    }
}
    