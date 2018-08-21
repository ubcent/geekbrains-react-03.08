import './Page404.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Page404 = (props) => {
  const {} = props;

  return (
    <div className="page404">
      <h2>Error 404</h2>
      <p>Such link not exists, please check again!</p>
    </div>
  );
}

Page404.propTypes = {}

Page404.defaultProps = {}

export default Page404;
