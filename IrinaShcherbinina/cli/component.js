//встроенная библиотека node для работы с файлами
const fs = require('fs');
const path = require('path');
const args = require('minimist')(process.argv.slice(2), { alias: {name: 'n'}});
	


console.log(args);														 
														 
const {name} = args;
//Первое - создаем папку
fs.mkdirSync(path.resolve(__dirname, '..', 'src', 'components', name));

//Сгенерируем файл с компонентом .jsx
fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'components', name, `${name}.jsx`),
				 `import './${name}.scss';


import React, { Component } from 'react';

//помогает проверять входные параметры
import PropTypes from 'prop-types';
export default class ${name} extends Component {
	//описываем параметры, которые используем
	static propTypes = {}

//как решить проблему с пустым свойством
static defaultProp ={}

	render() {
		return (
			<div className="${name}"></div>
		);
}
}
`,
);

//Сгенерируем стили
fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'components', name, `${name}.scss`),
`.${name} {}`,
);

//Сгенерируем index.js
fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'components', name, 'index.js'),
`export default from './${name}';`,
);
















