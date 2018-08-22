import React, {Component} from 'react';

import CommentContainer from '../components/CommentContainer';
import PostDetails from '../components/PostDetails';

export default class PostDetailsPage extends Component {
    render() {
        return (
            <div>
                <PostDetails/>
                <CommentContainer/>
            </div>
        )
    }
}