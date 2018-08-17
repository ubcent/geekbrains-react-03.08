import './PageContent.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import CommentsList from 'components/CommentsList';
import CommentForm from 'components/CommentForm';

export default class PageContent extends Component {
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
      <div className="page-content">
        <Container>
          <Row>
            <Col md="8" className="blog-entries">
              <p>blog-entries</p>
              <CommentsList comments={comments}/>
              <CommentForm onSubmit={this.handleSubmit} />
            </Col>
            <Col md="4" className="sidebar-widgets">
              <p>sidebar-widgets</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
