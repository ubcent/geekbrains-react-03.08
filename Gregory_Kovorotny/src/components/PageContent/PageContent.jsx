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

import Content from '../../Content';


export default class PageContent extends Component {
  render() {
    return (
      <div className="page-content">
        <Container>
          <Row>
            <Col md="8" className="main-content">
              <PostView />
            </Col>
            <Col md="4" className="sidebar-widgets">
              <Search />
              <Categories categories={Content.categories} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
