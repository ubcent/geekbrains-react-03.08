import './Content.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Content extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({ href: PropTypes.string, label: PropTypes.string })
    ),
  }

  static defaultProps = {
    items: []
  }

  render() {
    const { children } = this.props;

    return (
      <div className="content">{children}</div>
    );
  }
}