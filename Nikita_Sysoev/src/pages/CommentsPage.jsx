import React, {Component} from 'react';

import Pagination from '../components/Pagination';
import CommentsListContainer from '../containers/CommentsListContainer';

export default class CommentsPage extends Component {
    render() {
        return (
            <div className="col-lg-8">
                <h1 className="my-4">
                    Latest comments
                </h1>
                <CommentsListContainer/>
                <Pagination/>
            </div>
        )
    }
}