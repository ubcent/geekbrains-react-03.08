import './HeaderMenu.css';

import React, { Component, Fragment } from 'react';
import { Nav, NavItem,  NavLink, Container } from 'reactstrap';
import PropTypes from 'prop-types';



export default class HeaderMenu extends Component {
  static propTypes={
    items: PropTypes.arrayOf(
      PropTypes.shape({ href: PropTypes.string, label: PropTypes.string })
    ),
  };

  render() {
    const { items } = this.props;

    return (
      <Fragment>
        <nav className="main_nav navbar navbar-expand-lg navbar-light fixed-top">
        <Container>
          <a className="navbar-brand" href="index.html">Start Bootstrap</a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
          <Nav className="navbar-nav ml-auto" >
          { items.map( (item) => <NavItem>
                                  <NavLink href={item.href}>{item.label} </NavLink>
                                  </NavItem>)}
          </Nav>
          </div>
        </Container>
        </nav>
      </Fragment>
    );
  }
}