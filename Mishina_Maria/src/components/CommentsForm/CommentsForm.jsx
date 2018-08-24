import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Card,CardHeader,CardBody,Form,FormGroup} from 'reactstrap';

export default class CommentsForm extends Component {
  static propTypes = {
      onSubmit: PropTypes.func.isRequired,
  };

  constructor(props){
      super(props);
      this.state = {
          author:'',
          message:'',
      }
  }

  handleChange = (event) => {this.setState({
      [event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
      const {onSubmit} = this.props;
      if (typeof onSubmit === 'function'){
          onSubmit(this.state);
      }
      this.setState({
          author: '',
          message: '',
      });
      event.preventDefault();

  };

  render() {

  return(
    <Card className="my-4">
        <CardHeader tag="h5">Leave a Comment:</CardHeader>
        <CardBody>
            <Form>
                <FormGroup>
                    <label>
                        Author:<br/>
                        <input onChange={this.handleChange} value={this.state.author} type="text" name="author" className="form-control"/>
                    </label>
                    <br/>
                    <label>
                        Message:<br/>
                        <textarea onChange={this.handleChange} value={this.state.message} name="message" className="form-control" rows="3" cols="100"/>
                    </label><br/>
                    <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                </FormGroup>
            </Form>
        </CardBody>
    </Card>
    );
  }  
}