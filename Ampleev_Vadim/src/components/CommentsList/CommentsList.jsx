import './CommentsList.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Comment from 'components/Comment';

export default class CommentsList extends PureComponent {
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
            <ul className="CommentsList">
                {comments.map((comment, i) => <li key={i}><Comment {...comment}/></li>)}
            </ul>
        );
    }
}
  