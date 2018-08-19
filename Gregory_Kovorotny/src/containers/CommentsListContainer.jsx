import React, { Component, Fragment } from 'react';

import CommentsList from 'components/CommentsList';

export default class CommentsListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comments: [],
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=30`) // TODO добавить фильтрацию на основе Array comments[] - передаем в props
      .then((response) => response.json())
      .then((comments) => {
        this.setState({
          loading: false,
          comments: comments.map((comment) => ({ id: comment.id, author: comment.name, message: comment.body, postId: comment.postId })),
        })
      });
  }

  render() {
    const { loading, comments } = this.state;

    return (
      <Fragment>
        {loading ? 'loading' : <CommentsList comments={comments} />}
      </Fragment>
    );
  }
}
