import './CommentsForm.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class CommentsForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props){
    super(props);
    this.state = {
      author: '',
      message: '',
    }
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    const { onSubmit } = this.props;
    if (typeof onSubmit === 'function'){
        onSubmit(this.state);
    }
    event.preventDefault();
  }

  render() {
    const {author} = this.state;
    return (
      <div className="CommentsForm">
        <Form>
          <FormGroup>
            <Label>Author</Label>
            <Input onChange={this.handleChange} value={author} type="text" name="author" placeholder="Your name" />
            <Label>Message</Label>
            <Input type="textarea" onChange={this.handleChange} name="message" />
          </FormGroup>
          <Button onClick={this.handleSubmit}>Send</Button>
        </Form>
      </div>
    );
  }
}
  