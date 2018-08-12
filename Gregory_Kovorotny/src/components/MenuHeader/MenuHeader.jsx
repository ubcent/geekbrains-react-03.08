import './MenuHeader.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import Login from '../Login';

export default class MenuHeader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string, href: PropTypes.string })
    ),
  }

  static defaultProps = {
    items: [],
  }

  render() {
    const { items } = this.props;

    return (
      <div className='menu-header'>
        <Navbar expand fixed='top'>
          <NavbarBrand href='/'>MY BLOG</NavbarBrand>
          <Nav className='ml-auto' navbar>
            {items.map((item) => <NavItem><NavLink href={item.href}>{item.label}</NavLink></NavItem>)}
            <NavItem><Login /></NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
