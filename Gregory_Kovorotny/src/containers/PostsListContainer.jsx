import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostsList from 'components/PostsList';

export default class PostsListContainer extends Component {
  static propTypes = {
    filterId: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: [],
    }
  }

  componentDidMount() {
    const userId = this.props.filterId;
    let fetchUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=15';
    if (userId) {
      fetchUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    }
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((posts) => {
        this.setState({
          loading: false,
          posts: posts.map((post) => ({
            id: post.id,
            title: post.title,
            body: post.body,
            imgUrl: 'http://placehold.it/750x300.png', // пока заглушка дефолтная
            date: new Date, // пока заглушка дефолтная
            author: 'Blogger X', // пока заглушка дефолтная
          })),
        })
      });
  }

  render() {
    const { loading, posts } = this.state;

    return (
      loading ? 'loading' : <PostsList posts={posts} />
    );
  }
}
