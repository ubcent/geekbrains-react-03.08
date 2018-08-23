import './MenuHeader.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
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

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  closeMenu = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { items } = this.props;

    return (
      <div className="menu-header">
        <Navbar expand="md" fixed="top" dark>
          <Container>
            <NavbarBrand href="/">THE BLOG PLACE</NavbarBrand>
            <NavbarToggler onClick={this.toggleMenu} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {items.map((item) => <NavItem onClick={this.closeMenu}>
                  <NavLink tag={Link} to={item.href}>{item.label}</NavLink>
                </NavItem>)}
                <NavItem ><Login /></NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
