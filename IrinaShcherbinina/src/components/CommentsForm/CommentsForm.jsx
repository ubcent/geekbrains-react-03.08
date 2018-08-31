import './CommentsForm.scss';

import React, { Component } from 'react';

import PropTypes from 'prop-types';
export default class CommentsForm extends Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	}

constructor(props) {
	super(props);
	
	this.state = {
		author: '',
		message: '',
	}
}

handleChange = (event) => {
	this.setState({
		 [event.target.name]: event.target.value,
	 });
}
 
handleSubmit = (event) => {
	 const {onSubmit} = this.props;
	 
	 if (typeof onSubmit === 'function') {
		 onSubmit(this.state);
	 }
	 event.preventDefault();
 }

	render() {
		const {author} = this.state;
		return (
			<div className="CommentsForm">
				<label>
				Author:
					<input onChange={this.handleChange} value={author} type="text" name="author"></input>
				</label><br />
				
				<label>
				Message:<br />
					<textarea onChange={this.handleChange} name="message"></textarea>
				</label> <br />
				<button onClick={this.handleSubmit}>Send</button>
			</div>
		);
}
}
