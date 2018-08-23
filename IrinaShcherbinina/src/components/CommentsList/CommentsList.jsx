import './CommentsList.scss';


import React, { Component } from 'react';

//помогает проверять входные параметры
import PropTypes from 'prop-types';

import Comment from 'components/Comment';

export default class CommentsList extends Component {
	//описываем параметры, которые используем
	static propTypes = {
		comments: PropTypes.arrayOf(
		PropTypes.shape({
			author: PropTypes.string.isRequired,
			message: PropTypes.string.isRequired,
		})
		)
	}

//как решить проблему с пустым свойством
static defaultProps ={
	comments: [],
}

	render() {
		const {comments} = this.props;
		
		return (
			<ul className="CommentsList">
				{comments.map((comment) => <li><Comment author={comment.author} message={comment.message}/></li>)}
				
			</ul>
		);
}
}
