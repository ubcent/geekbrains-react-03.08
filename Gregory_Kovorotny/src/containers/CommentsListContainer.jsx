import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from 'actions/comments';

import CommentsList from 'components/CommentsList';

class CommentsListContainer extends Component {
  // а теперь надо propTypes определять?
  // они теперь приходят из reducer-а
  static propTypes = {}

  componentDidMount() {
    const { load } = this.props;
    const { userId } = this.props.match.params; // TODO - разобраться как пробрасывать в action

    load();
  }

  render() {
    const { comments, loading } = this.props;

    return (
      <Fragment>
        {loading ? 'loading' : <CommentsList comments={comments} />}
      </Fragment>
    );
  }
}

function mapStateToProps(state, props) {
  return ({
    ...props,
    loading: state.comments.loading,
    comments: state.comments.entities,
  });
}

function mapDispatchToProps(dispatch, props) {
  return ({
    ...props,
    load: () => load(dispatch),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);

/* СТАРЫЙ КОД - пока оставляю для сравнения в будущем
constructor(props) {
  super(props);

  this.state = {
    loading: true,
    comments: [],
  }
}

componentDidMount() {
  const { userId } = this.props.match.params;

  fetch(`https://jsonplaceholder.typicode.com/comments`) // если бы делали запрос в БД - то понятно фильтр был бы на стороне БД!
    .then((response) => response.json())
    .then((comments) => {
      if (typeof userId !== 'undefined') {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
          .then((response) => response.json())
          .then((posts) => {
            const userPostsIds = posts.map((post) => post.id)
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
*/
