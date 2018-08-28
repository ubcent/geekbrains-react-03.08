import './PageContent.scss';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import routes from 'root/routes';
import Search from 'widgets/Search';
import Categories from 'widgets/Categories';

import Content from 'root/Content'; // этот импорт временное решение, когда будет БД - то будет удален

export default class PageContent extends Component {
  render() {
    return (
      <div className="page-content">
          <Container>
            <Row>
              <Col md="8" className="main-content">
                <Switch>
                  {routes.map((route) => <Route {...route} />)}
                </Switch>
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
