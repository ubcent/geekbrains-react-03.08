import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {load} from 'actions/comments';

import CommentsList from '../components/CommentsList';
import Pagination from '../components/Pagination';

class CommentsListContainer extends Component {
    componentDidMount() {
        this.props.loadComments();
    }

    loadPrev = (e) => {
        e.preventDefault();
    };

    loadNext = (e) => {
        e.preventDefault();
    };

    render() {
        const {comments, loading} = this.props;
        return (
            comments && !loading ?
                <Fragment>
                    <CommentsList comments={comments}/>
                    <Pagination loadNext={this.loadNext} loadPrev={this.loadPrev}/>
                </Fragment>
                :
                'Loading...'
        )
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        comments: state.comments.entities,
        loading: state.comments.loading,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        loadComments: () => load(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);