import './menu.css';

import classNames from 'classnames'; 
import React, { Component } from 'react';

//помогает проверять входные параметры
import PropTypes from 'prop-types';



export default class Menu extends Component {
	//описываем параметры, которые используем
	static propTypes = {
		//входное prop items  - это массив объектов со свойствами определенных типов
		items: PropTypes.arrayOf(
		PropTypes.shape({href: PropTypes.string, label:PropTypes.string})
		),
		size: PropTypes.oneOf(['big', 'small']),
	}

//как решить проблему с пустым свойством
static defaultProp ={
	size: 'small',
	items: []
}

	render() {
		const { items, size } = this.props;
		
		const className = classNames('menu', {
			'menu-big': size === 'big',
			'menu-small': size === 'small',
		})
		
		return (
			<ul className={classNames}>{items.map((item) => <li><a href={item.href}>{item.label}</a></li>)}</ul>
			
		);
}
}