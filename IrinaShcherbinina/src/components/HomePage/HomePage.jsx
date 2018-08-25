import './HomePage.scss';


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//помогает проверять входные параметры
import PropTypes from 'prop-types';
export default class HomePage extends Component {
	//описываем параметры, которые используем
	static propTypes = {}

//как решить проблему с пустым свойством
static defaultProp ={}

	render() {
		return (
			<div className="HomePage">
				Hello I'm HOME PAGE!
				<Link to="comments">Comments</Link>
			</div>
		);
}
}
