import './Footer.css';

import React, { Component, Fragment } from 'react';
import { Nav, NavItem,  NavLink, Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';



export default class Footer extends Component {
  static propTypes={};

  static defaultProps = {};

  render() {
  return(
    <Fragment>
    <footer>

      <Container>
        <Row>
          <Col lg="12" md="10" className="mx-auto">

            <ul className="list-inline" >
             <li className="list-inline-item">
                <a href="#">Заглушка</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Заглушка</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Заглушка</a>
              </li>
            </ul>
            <p className="copyright text-muted">Copyright &copy; Your Website 2018</p>
          </Col>
        </Row>
      </Container>

    </footer>
    </Fragment>
  )}
}