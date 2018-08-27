import React, {Component} from 'react';

import {connect} from 'react-redux';
import {load} from 'actions/posts';

import PostsList from '../components/PostsList';

class PostsContainer extends Component {
    componentDidMount() {
        const {loadPosts} = this.props;
        loadPosts();
    }

    render() {
        const {posts, loading} = this.props;
        return (
            posts && !loading ? <PostsList posts={posts}/> : 'Loading...'
        );
    }
}

function mapToStateProps(state, props) {
    return {
        ...props,
        posts: state.posts.entities,
        loading: state.posts.loading,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        loadPosts: () => load(dispatch),
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(PostsContainer);