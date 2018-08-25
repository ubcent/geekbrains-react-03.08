import './Header.scss';


import React, { Component } from 'react';

//помогает проверять входные параметры
import PropTypes from 'prop-types';

import {withRouter} from 'react-router-dom';

class Header extends Component {
	//описываем параметры, которые используем
	static propTypes = {}

//как решить проблему с пустым свойством
static defaultProp ={}

	render() {
		const {match} = this.props;
		
		return (
			<div className="Header"></div>
		);
}
}
export default withRouter(Header);