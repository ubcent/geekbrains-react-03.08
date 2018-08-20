import './Layout.css';

import React, { Component, Fragment } from 'react';

import Menu from '../Menu';

const menuItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'News',
    href: '/news'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
];

export default class Layout extends Component{
  render(){
    const { children } = this.props;

    return(
      <Fragment>
        <div className="wrapper">
      <Menu navType="header" items={menuItems} />

          <div className="content">
          {children}
          </div>

        </div>

      <Menu navType="footer" items={menuItems} />
      </Fragment>
    );
  }
}