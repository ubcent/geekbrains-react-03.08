import './PostsList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Post from 'components/Post';

export default class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
      })
    )
  }

  static defaultProps = {
    posts: [],
  }

  render() {
    const { posts } = this.props;
     
    return (
      <div className="posts-list">
        {posts.map((post) => <Post {...post}/>)}
      </div>
    );
  }
}
