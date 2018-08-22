const fs = require('fs');
const path = require('path');

const args = require('minimist')(process.argv.slice(2), { alias: { name: 'n' } });

const { name } = args;
// создаем папку
fs.mkdirSync(path.resolve(__dirname, '..', 'src', 'components', name));
// генерируем jsx-файл
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', name, `${name}.jsx`),
    `import './${name}.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ${name} extends Component {
  static propTypes = {}
  static defaultProps = {}
  render() {
    return (
      <div className="${name}"></div>
    );
  }
}
  `,
);

// генерируем стили
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', name, `${name}.scss`),
    `.${name} {}`,
);

// генерируем index.js
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', name, 'index.js'),
    `export default from './${name}';`,
);