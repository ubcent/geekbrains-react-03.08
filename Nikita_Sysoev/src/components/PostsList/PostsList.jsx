import './PostsList.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

export default class PostsList extends Component {
    static propTypes = {
        posts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
            })
        )
    };
    static defaultProps = {
        posts: [],
    };

    render() {
        const {posts} = this.props;
        return (
            <div className="PostsList">
                {
                    posts.length ?
                        posts.map((post) => <Post key={post.id} {...post}/>)
                        :
                        <p>No posts</p>
                }
            </div>
        )
    }
}