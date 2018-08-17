import './PageContent.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import PostView from 'components/PostView';
import Search from 'widgets/Search';
import Categories from 'widgets/Categories';

export default class PageContent extends Component {


  render() {
    return (
      <div className="page-content">
        <Container>
          <Row>
            <Col md="8" className="main-content">
              <h2>main-content</h2>
              <PostView />
            </Col>
            <Col md="4" className="sidebar-widgets">
              <h2>sidebar-widgets</h2>
              <Search />
              <Categories />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
