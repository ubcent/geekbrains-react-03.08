const ComponentTemplate = function() {

  this.jsx = function(name) {
    return (
`import './${name}.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ${name} extends Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div className="${name.split(/(?=[A-Z])/).reduce((className, word, i) => className + '-' + word).toLowerCase()}">
      </div>
    );
  }
}
`);
  }

  this.jsxs = function(name) {
    return (
`import './${name}.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ${name} = (props) => {
  const {} = props;
  
  return (
    <div className="${name.split(/(?=[A-Z])/).reduce((className, word, i) => className + '-' + word).toLowerCase()}">
    </div>
  );
}

${name}.propTypes = {}

${name}.defaultProps = {}

export default ${name};
`);
  }

  this.scss = function(name) {
    return (
`.${name.split(/(?=[A-Z])/).reduce((className, word, i) => className + '-' + word).toLowerCase()} {

}
`);
  }

  this.js = function(name) {
    return (
`export default from './${name}';
`);
  }

  this.test = function(name) {
    return (
`import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

import ${name} from './${name}';

test('${name} should ...', () => {

});
`);
  }

}

module.exports = new ComponentTemplate()
