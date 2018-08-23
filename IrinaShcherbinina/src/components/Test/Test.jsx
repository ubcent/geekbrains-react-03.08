import './Test.scss';


import React, { Component } from 'react';

//помогает проверять входные параметры
import PropTypes from 'prop-types';
export default class Test extends Component {
	//описываем параметры, которые используем
	static propTypes = {}

//как решить проблему с пустым свойством
static defaultProp ={}

	render() {
		return (
			<div className="Test"></div>
		);
}
}
