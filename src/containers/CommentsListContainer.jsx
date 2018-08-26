import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { load } from 'actions/comments';
import CommentsList from 'components/CommentsList';

class CommentsListContainer extends PureComponent {
  componentDidMount() {
    const { loadComments } = this.props;

    loadComments();
  }

  render() {
    const { comments, loading } = this.props;
    return (
      loading ? 'Loading...' : <CommentsList comments={comments} />
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    loading: state.comments.loading,
    comments: state.comments.entities,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    loadComments: () => load(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
