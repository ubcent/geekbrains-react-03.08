import './HomePage.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col } from 'reactstrap';

export default class HomePage extends Component {

  render() {

    return (
      <div className='home-page'>
        <Container>
          <Row>
            <Col sm="3" className='left-content'>
              <p>Left content</p>
            </Col>
            <Col sm="9" className='main-content'>
              <p>Main content</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
