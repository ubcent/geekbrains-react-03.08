import React, { PureComponent } from 'react';

import Comment from 'components/Comment';

export default class CommentContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comment: {},
    }
  }

  componentDidMount() {
    const { match } = this.props;
    fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
      .then((response) => response.json())
      .then((comment) => {
        this.setState({
          loading: false,
          comment,
        });
      });
  }

  render() {
    const { comment, loading } = this.state;
    return (
      loading ? 'Loading' : <Comment author={comment.name} message={comment.body} />
    )
  }
}