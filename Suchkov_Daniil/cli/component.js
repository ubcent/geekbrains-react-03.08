const args = require('minimist')(process.argv.slice(2), {alias: {name: 'n'}});
const fs = require('fs');
const path = require('path');

const { name } = args;
//Создание папки
fs.mkdirSync(path.resolve(__dirname, '..', 'src', 'components', name));
//Создание jsx файла
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
//Создание scss файла
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', name, `${name}.scss`),
    `.${name}{}`,
);
//Создание index.js файла
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', name, 'index.js'),
    `export default from './${name}';`,
);