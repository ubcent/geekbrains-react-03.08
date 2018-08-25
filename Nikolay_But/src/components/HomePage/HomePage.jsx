import './HomePage.scss';

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class HomePage extends PureComponent {
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