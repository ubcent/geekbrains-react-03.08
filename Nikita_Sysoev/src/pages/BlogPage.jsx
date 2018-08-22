import React, {Component} from 'react';

import Pagination from '../components/Pagination';
import PostsContainer from '../containers/PostsContainer';

export default class BlogPage extends Component {
    render() {
        return (
            <div className="col-lg-8">
                <h1 className="my-4">
                    Latest posts
                </h1>
                <PostsContainer/>
                <Pagination/>
            </div>
        )
    }
}