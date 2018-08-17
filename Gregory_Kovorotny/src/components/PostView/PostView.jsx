import './PostView.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentsList from 'components/CommentsList';
import CommentForm from 'components/CommentForm';

export default class PostView extends Component {
  static propTypes = {}

  static defaultProps = {}

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
    });
  }

  render() {
    const { comments } = this.state;
    
    return (
      <div className="post-view">
        <CommentsList comments={comments}/>
        <CommentForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
