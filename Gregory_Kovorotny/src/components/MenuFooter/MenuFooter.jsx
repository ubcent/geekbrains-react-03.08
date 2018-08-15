import './MenuFooter.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class MenuFooter extends Component {
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
      <div className="menu-footer">
        <Navbar expand fixed="bottom">
          <Nav className="ml-auto" navbar>
            {items.map((item) => <NavItem><NavLink href={item.href}>{item.label}</NavLink></NavItem>)}
          </Nav>
        </Navbar>
      </div>
    );
  }
}
