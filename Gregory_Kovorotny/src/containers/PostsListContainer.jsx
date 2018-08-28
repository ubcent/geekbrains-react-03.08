import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostsList from 'components/PostsList';

export default class PostsListContainer extends Component {
  static propTypes = {
    count: PropTypes.number,
  }

  static defaultProps = {
    count: 2,
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
  // хотя если будем из БД запрашивать - то мы ведь изначально будем
  // знать общее кол-во постов, и все будет гораздо проще
  // иы сразу будем знать какой номер страницы последний
  loadPosts(direction = 0) {
    const { userId } = this.props.match.params;

    const count = this.props.count;
    let newPage = this.state.page;
    if (direction === 1 && !this.state.reachEnd) {
      newPage++;
    } else if (direction === -1 && this.state.page !== 1) {
      newPage--;
    }
    const start = (newPage - 1) * count;

    if (newPage !== this.state.page || direction === 0) {
      let fetchUrl = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${count}`;
      if (typeof userId !== 'undefined') {
        fetchUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_start=${start}&_limit=${count}`;
      }
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((posts) => {
          if (posts.length === 0) {
            this.setState((prevState) => ({
              loading: false,
              reachEnd: true,
            }));
          } else {
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
            });
          }
        });
    }
  }

  componentWillReceiveProps() {
    this.setState({
      loading: true,
      posts: [],
      page: 1,
      reachEnd: false,
    }, () => { // иначе не успевал обновить стейт на 3-6 миллисикунд
      this.loadPosts();
    });
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
    this.setState({
      loading: true,
    });
    this.loadPosts(DIRECTION[direction]);
  }

  render() {
    const { loading, posts, page, reachEnd } = this.state;

    return (
      loading ? 'loading' : <PostsList onLoadPosts={this.handleLoadPosts} posts={posts} page={page} reachEnd={reachEnd} />
    );
  }
}
