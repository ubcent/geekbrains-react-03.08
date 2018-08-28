import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from 'actions/comments';

import CommentsList from 'components/CommentsList';

class CommentsListContainer extends Component {
  // а теперь надо propTypes определять?
  // они теперь приходят из reducer-а
  static propTypes = {}

  componentDidMount() {
    const { load } = this.props;
    const { userId } = this.props.match.params;
    console.log('didmount');
    load(userId);
  }

  componentWillReceiveProps() {
    const { load } = this.props;
    const { userId } = this.props.match.params;
    // //
    // load();
    console.log('willreceive');
  }

  render() {
    const { comments, loading } = this.props;

    return (
      <Fragment>
        {loading ? 'loading' : <CommentsList comments={comments} />}
      </Fragment>
    );
  }
}

function mapStateToProps(state, props) {
  console.log('state to props');
  return ({
    ...props,
    loading: state.comments.loading,
    comments: state.comments.entities,
  });
}

function mapDispatchToProps(dispatch, props) {
  console.log('disp to props');
  return ({
    ...props,
    load: (userId) => load(dispatch, userId),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
