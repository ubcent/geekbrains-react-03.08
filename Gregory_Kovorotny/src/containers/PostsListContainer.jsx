import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostsList from 'components/PostsList';

export default class PostsListContainer extends Component {
  static propTypes = {
    count: PropTypes.number,
  }

  static defaultProps = {
    count: 3,
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: [],
      page: 1,
      reachEnd: false,
    }
  }

  // чрезмерно кажется навороченным. TODO - надо подумать
  loadPosts(direction = 0) {
    const { userId } = this.props.match.params;

    const count = this.props.count;
    const start = this.state.page * count - 1;
    let newPage = this.state.page;
    if (direction === 1 && !this.state.reachEnd) {
      newPage++;
    } else if (direction === -1 && this.state.page !== 1) {
      newPage--;
    }

    if (newPage !== this.state.page || direction === 0) {
      let fetchUrl = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${count}`;
      if (typeof userId !== 'undefined') {
        fetchUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_start=${start}&_limit=${count}`;
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
            page: newPage,
            reachEnd: (posts.length < count),
          })
        });
    }
  }

  componentDidMount() {
    this.loadPosts();
  }

  // а где вообще такие константы (DIRECTION например) определять??
  handleLoadPosts = (direction) => {
    const DIRECTION = {
      prev: -1,
      next: +1,
    }
    this.loadPosts(DIRECTION[direction]);
  }

  render() {
    const { loading, posts, page } = this.state;

    return (
      loading ? 'loading' : <PostsList onLoadPosts={this.handleLoadPosts} posts={posts} />
    );
  }
}
