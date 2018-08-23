import './CommentsForm.scss';


import React, { Component } from 'react';

//помогает проверять входные параметры
import PropTypes from 'prop-types';
export default class CommentsForm extends Component {
	//описываем параметры, которые используем
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	}

//Инициализируем состояни компаонента
constructor(props) {
	super(props);
	
	this.state = {
		author: '',
		message: '',
	}
}

//узнать, что в input что то происходит. Подписаться на событие change
 handleChange = (event) => {
	
	 //чтобы что то записать в state нужно использовать спец функцию setState
	 this.setState({
		 [event.target.name]: event.target.value,
	 });
}
 //Действие с кнопкой отправить. Обработать нажатие на кнопку Send
 handleSubmit = (event) => {
	 const {onSubmit} = this.props;
	 
	 //единственное, что нужно здесь сделать - убедиться что это функция
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
