import './Content.scss';

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


export default class Content extends PureComponent {

  render() {
    const {children} = this.props;

    return (
      <div className="content">{children}</div>
    );
  }
}