import './PostCommentForm.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup,
  Input,
  Label,
  Button,
} from 'reactstrap';

export default class PostCommentForm extends Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      author: '',
      message: '',
      postId: this.props.postId,
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    if (typeof onSubmit === 'function') {
      onSubmit(this.state);
      this.setState({
        author: '',
        message: '',
      });
    }
  }

  render() {
    return (
      <div className="comment-form">
          <InputGroup>
            <Input
              id="author" type="text" name="author" placeholder="Author name" value={this.state.author}
              autoFocus
              onChange={this.handleChange}
            />
          </InputGroup>
          <InputGroup>
            <Input
              id="message" type="textarea" name="message" placeholder="Your comment" value={this.state.message}
              onChange={this.handleChange}
            />
          </InputGroup>
          <Button onClick={this.handleSubmit}>Send</Button>
      </div>
    );
  }
}
