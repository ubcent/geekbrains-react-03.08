import './HomePage.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div className="HomePage">
        Hello! I'm HOME PAGE!
        <Link to="comments">Comments</Link>
      </div>
    );
  }
}
  