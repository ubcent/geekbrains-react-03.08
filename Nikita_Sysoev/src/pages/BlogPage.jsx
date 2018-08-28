import React, {Component} from 'react';

import Pagination from '../components/Pagination';
import PostsContainer from '../containers/PostsContainer';
import Wrapper from '../components/Wrapper';
import Aside from '../components/Aside';

export default class BlogPage extends Component {
    render() {
        return (
            <div className="content">
                <Wrapper>
                    <div className="space-between">
                        <div className="col-lg-8">
                            <h1 className="my-4">
                                Latest posts
                            </h1>
                            <PostsContainer/>
                            <Pagination/>
                        </div>
                        <div className="col-md-4">
                            <Aside/>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}