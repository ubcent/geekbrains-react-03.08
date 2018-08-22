import './Menu.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import LoginButton from './../LoginButton';

export default class Menu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, href: PropTypes.string, label: PropTypes.string })
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
      <div>
         <ul className={className}>
          <div className="left-col">{items.map((item) => <li key={item.id}><a href={item.href}>{item.label}</a></li>)}</div>
          <div className="right-col"><LoginButton text="Login"/></div>
         </ul>
      </div>
    );
  }
}
