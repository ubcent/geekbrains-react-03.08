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
      <footer className="footer text-center">
        <Container>
          <p>Copyright The Blog Place 2018</p>
        </Container>
      </footer>
    );
  }
}
