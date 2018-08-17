import './Sidebar.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Sidebar extends Component {
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
      <div className="sidebar">
        <ul className="">{items.map((item) => <li><a href={item.href}>{item.label}</a></li>)}</ul>
      </div>
    );
  }
}
