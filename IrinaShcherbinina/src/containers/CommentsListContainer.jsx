import React, { PureComponent } from 'react';
import CommentList from 'components/CommentsList';

export default class CommentsListContainer extends PureComponent {
	
	constructor(props) {
		super(props);
		
		this.state = {
			loading: true,
			comments: [],
		}
	}
	
	//метод для отрисовки жизненного цикла компонента из бэкенда
	componentDidMount() {
		//отправляется ajax запрос
		fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
		//возвращается ajax запрос
		.then((response) => response.json())
		.then((comments) => {
			this.setState({
				comments: comments.map((comment) => ({ id: comment.id, author: comment.name, message: comment.body})),
				loading: false,
			})
		});
	}
	
	render() {
		const {comments, loading } = this.state;
		
		return(
			loading ? 'Loading' : <CommentList comments={comments} />
		)
	}
}