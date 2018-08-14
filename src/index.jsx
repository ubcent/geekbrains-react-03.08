import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import CommentsList from 'components/CommentsList';
import CommentsForm from 'components/CommentsForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
  }
  
  handleSubmit = (comment) => {
    const { comments } = this.state;

    this.setState({
      comments: comments.concat([comment]),
    })
  }

  render() {
    const { comments } = this.state;

    return (
      <Fragment>
        <CommentsList comments={comments} />
        <CommentsForm onSubmit={this.handleSubmit} />
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
