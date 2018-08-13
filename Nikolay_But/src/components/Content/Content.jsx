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
    const { items } = this.props;

    return (
      <div className="content"><div className="">Article 1</div><div className="">Article 2</div></div>
    );
  }
}
