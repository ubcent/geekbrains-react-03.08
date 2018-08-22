import React, { PureComponent } from 'react';

import CommentList from 'components/CommentsList';

export default class CommentsListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comments: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
      .then((response) => response.json())
      .then((comments) => {
        this.setState({
          comments: comments.map((comment) => ({ id: comment.id, author: comment.name, message: comment.body })),
          loading: false,
        })
      });
  }

  render() {
    const { comments, loading } = this.state;

    return (
      loading ? 'Loading' : <CommentList comments={comments} />
    )
  }
}
