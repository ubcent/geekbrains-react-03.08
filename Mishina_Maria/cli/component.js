const fs = require('fs');
const path = require('path');

const args = require('minimist')(process.argv.slice(2), {alias:{name: 'n'}});

const {name} = args;
//Создаем папку
fs.mkdirSync(path.resolve(__dirname,'..','src','components',name));
//Сгенерируем jsx-файл
fs.writeFileSync(
    path.resolve(__dirname,'..','src','components',name, `${name}.jsx`),
    `import './${name}.scss';

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class ${name} extends PureComponent {
    static propTypes = {};

    static defaultProps = {};
  
    render() {
    return(
      <div className="${name}"></div>
      );
    }  
}
    `,
);

//Сгенерируем стили
fs.writeFileSync(
    path.resolve(__dirname,'..','src','components',name,`${name}.scss`),
    `.${name} {}`,
);

//Сгенерируем index.js
fs.writeFileSync(
    path.resolve(__dirname,'..','src','components',name,'index.js'),
    `export default from './${name}';`,
);