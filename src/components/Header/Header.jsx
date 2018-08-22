import './Header.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

class Header extends Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    const { match } = this.props;
    
    return (
      <div className="Header"></div>
    );
  }
}
  
export default withRouter(Header);
