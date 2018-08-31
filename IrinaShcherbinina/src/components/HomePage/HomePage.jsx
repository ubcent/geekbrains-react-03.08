import './HomePage.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class HomePage extends Component {
	static propTypes = {}

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
