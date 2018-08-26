import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { load } from 'actions/comments';
import BlogsList from 'components/BlogsList';

class BlogsListContainer extends PureComponent {
  componentDidMount() {
    const { loadMoreBlogs } = this.props;

    loadMoreBlogs();
  }

  render() {
    const { blogs, loading } = this.props;

    return (
      loading ? 'Loading...' : <BlogsList blogs={blogs} />
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    loading: state.blogs.loading,
    blogs: state.blogs.entities,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    loadMoreBlogs: () => load(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsListContainer);