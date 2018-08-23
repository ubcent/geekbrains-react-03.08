import './Comment.scss';


import React, { Component } from 'react';

//помогает проверять входные параметры
import PropTypes from 'prop-types';
export default class Comment extends Component {
	//описываем параметры, которые используем
	static propTypes = {
		author: PropTypes.string.isRequired,
		message: PropTypes.string.isRequired,
	}

	render() {
		const {author, message} = this.props;
		
		return (
			<div className="Comment">
				<h4>{author}</h4>
				<div>{message}</div>
			</div>
		);
}
}
