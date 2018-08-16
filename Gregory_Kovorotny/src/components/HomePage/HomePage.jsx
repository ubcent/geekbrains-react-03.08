import './HomePage.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import CommentsList from 'components/CommentsList';
import CommentForm from 'components/CommentForm';

export default class HomePage extends Component {
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
      <div className="home-page">
        <Container>
          <Row>
            <Col sm="3" className="left-content">
              <p>Left content</p>
            </Col>
            <Col sm="9" className="main-content">
              <p>Main content</p>
              <CommentsList comments={comments}/>
              <CommentForm onSubmit={this.handleSubmit} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
