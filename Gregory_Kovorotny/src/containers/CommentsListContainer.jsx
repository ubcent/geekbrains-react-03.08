import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import CommentsList from 'components/CommentsList';

export default class CommentsListContainer extends Component {
  static propTypes = {
    filterId: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comments: [],
    }
  }

  componentDidMount() {
    const userId = this.props.filterId;
    fetch(`https://jsonplaceholder.typicode.com/comments`) // если бы делали запрос в БД - то понятно фильтр был бы на стороне БД!
      .then((response) => response.json())
      .then((comments) => {
        if (userId) {
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => response.json())
            .then((posts) => {
              const userPostsIds = posts.map((post) => post.id)
              console.log(userPostsIds);
              this.setState({
                loading: false,
                comments: comments.filter((comment) => (userPostsIds.includes(comment.postId)))
                  .map((comment) => ({ id: comment.id, author: comment.name, message: comment.body, postId: comment.postId })),
              })
            });
        } else {
          this.setState({
            loading: false,
            comments: comments.filter((comment) => (comment.postId < 15))
              .map((comment) => ({ id: comment.id, author: comment.name, message: comment.body, postId: comment.postId })),
          })
        }
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
