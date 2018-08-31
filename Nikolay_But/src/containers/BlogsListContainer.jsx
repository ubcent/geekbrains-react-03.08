import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { load } from 'actions/blogs';
import BlogsList from 'components/BlogsList';

class BlogsListContainer extends PureComponent {
  componentDidMount() {
    const { loadBlogs } = this.props;

    loadBlogs();
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
    loadBlogs: () => load(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsListContainer);