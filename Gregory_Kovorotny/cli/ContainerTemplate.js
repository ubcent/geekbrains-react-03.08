const ContainerTemplate = function() {

  this.jsx = function(name) {
    return (
`import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ${name} from 'components/${name}';

export default class ${name}Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      ...: [],
    }
  }

  componentDidMount() {
    fetch('...')
      .then((response) => response.json())
      .then((...) => {
        this.setState({
          loading: false,
          ...: ....map((...) => ({})),
        })
      });
  }
  render() {
    return (
      <Fragment>
        {loading ? 'loading' : <${name} ...={...} />}
      </Fragment>
    );
  }
}
`);
  }

}

module.exports = new ContainerTemplate()
