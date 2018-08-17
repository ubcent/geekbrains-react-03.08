import './MenuHeader.scss';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Login from 'components/Login';

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
      <div className="menu-header">
        <Navbar expand fixed="top">
          <Container>
            <NavbarBrand href="/">MY BLOG</NavbarBrand>
            <Nav className="lg-auto" navbar>
              {items.map((item) => <NavItem><NavLink href={item.href}>{item.label}</NavLink></NavItem>)}
              <NavItem><Login /></NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
