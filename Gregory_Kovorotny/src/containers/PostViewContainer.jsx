import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostView from 'components/PostView';

export default class PostViewContainer extends Component {
  static propTypes = {}

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      post: {},
    }
  }

  componentDidMount() {
    const { postId } = this.props.match.params;

    fetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`)
      .then((response) => response.json())
      .then((post) => {
        this.setState({
          loading: false,
          post: {
            id: post[0].id,
            title: post[0].title,
            body: post[0].body,
            imgUrl: 'http://placehold.it/900x300.png', // пока заглушка дефолтная
            date: new Date, // пока заглушка дефолтная
            author: 'Bloger X', // пока заглушка дефолтная
          },
        })
      });
  }

  render() {
    const { loading, post } = this.state;

    return (
      loading ? 'loading' : <PostView {...post} />
    );
  }
}
