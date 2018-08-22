import React, { PureComponent } from 'react';

import CommentList from 'components/CommentsList';

export default class CommentsListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comments: [],
      page: 1,
    }
  }

  loadMore = () => {
    const { page } = this.state;
    fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((comments) => {
        this.setState((prevState) => ({
          comments: prevState.comments.concat(
            comments.map((comment) => ({ id: comment.id, author: comment.name, message: comment.body }))
          ),
          page: prevState.page + 1,
          loading: false,
        }));
      });
  }

  componentDidMount() {
    this.loadMore();
  }

  handleLoadMore = (event) => {
    this.loadMore();
    event.preventDefault();
  }

  render() {
    const { comments, loading } = this.state;
    return (
      loading ? 'Loading' : <CommentList onLoadMore={this.handleLoadMore} comments={comments} />
    )
  }
}