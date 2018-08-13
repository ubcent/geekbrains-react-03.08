import './Menu.css';

import React, { Component, Fragment } from 'react';
import { Nav,  NavLink } from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';



export default class Menu extends Component {
  static propTypes={
    items: PropTypes.arrayOf(
      PropTypes.shape({ href: PropTypes.string, label: PropTypes.string })
    ),
    size: PropTypes.oneOf(['small', 'big']),
    // size: PropTypes.string,
  };

  // static defaultProps = {
  //   size: 'small',
  //   items: []
  // };

  render() {
    const { navType, items } = this.props;

    const className = classNames('menu', {
      'nav-header': navType === 'header',
      'nav-footer flex-column': navType === 'footer',
    });
    return (
      <Fragment>
      <Nav className={className}>
        { items.map( (item) =>  <NavLink href={item.href}> {item.label} </NavLink>)}
        </Nav>
      </Fragment>
    );
  }
}