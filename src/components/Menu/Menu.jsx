import './Menu.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Menu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({ href: PropTypes.string, label: PropTypes.string })
    ),
    size: PropTypes.oneOf(['big', 'small']),
  }

  static defaultProps = {
    size: 'small',
    items: []
  }

  render() {
    const { items, size } = this.props;
    
    const className = classNames('menu', {
      'menu-big': size === 'big',
      'menu-small': size === 'small',
    });

    return (
      <ul className={className}>{items.map((item) => <li><a href={item.href}>{item.label}</a></li>)}</ul>
    );
  }
}
