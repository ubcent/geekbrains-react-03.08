import './Header.css';

import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';



export default class Header extends Component {
  static propTypes={
    headerText: PropTypes.shape({ title: PropTypes.string,
      description: PropTypes.string }),
  };

  static defaultProps = {};

  render() {
    const { headerText } = this.props;

    return(
    <Fragment>
    <header className="masthead">
        <div className="overlay"></div>
        <Container>
          <Row>
            <Col sm="12" md="10" className="mx-auto">
              <div className="site-heading">
                <h1>{headerText.title}</h1>
                <span className="subheading">{headerText.description}</span>
              </div>
            </Col>
          </Row>
        </Container>
    </header>
    </Fragment>
    )
  }
}