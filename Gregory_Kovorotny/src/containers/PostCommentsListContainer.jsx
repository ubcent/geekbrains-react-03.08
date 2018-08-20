import React, { Component, Fragment } from 'react';

import PostCommentsList from 'components/PostCommentsList';
import PostCommentForm from 'components/PostCommentForm';

export default class PostCommentsListContainer extends Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
  }
  
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comments: [],
    }
  }

  handleSubmit = (comment) => { // вот тут будет отправка на сервер новых комментов, для добавки в БД
    const { comments } = this.state;
    comment.id = 555; // здесь надо генерировать уникальный id коммента - скорее всего получаем от сервера после вставки???

    this.setState({
      comments: [comment].concat(comments),
    });
  }

  componentDidMount() {
    const { postId } = this.props;

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((comments) => {
        this.setState({
          loading: false,
          comments: comments.map((comment) => ({ id: comment.id, author: comment.name, message: comment.body, postId: comment.postId })),
        })
      });
  }

  render() {
    const { postId } = this.props;
    const { loading, comments } = this.state;

    return (
      <Fragment>
        <PostCommentForm postId={postId} onSubmit={this.handleSubmit} />
        {loading ? 'loading' : <PostCommentsList comments={comments} />}
      </Fragment>
    );
  }
}
