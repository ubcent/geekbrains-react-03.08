import './Footer.scss';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Container,
} from 'reactstrap';

export default class Footer extends Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <footer className="footer">
        <Container>
          <p>Copyright My Blog 2018</p>
        </Container>
      </footer>
    );
  }
}
