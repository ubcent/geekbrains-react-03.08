import './Menu.css';

import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  InputGroupText,
  Button,
  Dropdown,
} from 'reactstrap';

import LoginButton from './../LoginButton';

export default class Menu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({id: PropTypes.number, href: PropTypes.string, label: PropTypes.string})
    ),
    size: PropTypes.oneOf(['big', 'small']),
  }

  static defaultProps = {
    size: 'small',
    items: []
  }

  render() {
    const {items, size} = this.props;

    const className = classNames('menu', {
      'menu-big': size === 'big',
      'menu-small': size === 'small',
    });

    return (
      <Navbar color="dark" dark expand="md" className={className}>
        <NavbarBrand href="/">BloggiGoggi</NavbarBrand>
        <Nav navbar>
          {items.map((item) =>
            <NavItem key={item.id}><NavLink href={item.href}>{item.label}</NavLink></NavItem>)}
        </Nav>

        <Col className="ml-auto" lg={{size: 4, order: 1, offset: 0}}>
          <InputGroup size="sm">
            <Input placeholder="" />
            <InputGroupAddon addonType="append">
              <Button>Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col className="ml-auto" lg={{size: 1, order: 1, offset: 0}}>
          <LoginButton text="Login" />
        </Col>
      </Navbar>
    );
  }
}
