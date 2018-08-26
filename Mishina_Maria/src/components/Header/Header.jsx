import './Header.scss';

import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
//import PropTypes from 'prop-types';

export default class Header extends Component {
    static propTypes = {};

    static defaultProps = {};
  
    render() {
    return(
      <header className="masthead" style={{backgroundImage: url('./img/about-bg.jpg')}}>
        <div className="overlay"/>
        <Container>
            <Row>
                <Col className="col-lg-8 col-md-10 mx-auto">
                    <div className="page-heading">
                        <h1>About me</h1>
                        <span className="subheading">This is what I do.</span>
                    </div>
                </Col>
            </Row>
        </Container>
      </header>
      );
    }  
}
    