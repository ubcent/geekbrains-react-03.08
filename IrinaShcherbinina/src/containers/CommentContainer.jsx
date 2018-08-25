import React, { PureComponent } from 'react';
import Comment from 'components/Comment';

export default class CommentsContainer extends PureComponent {
	
	constructor(props) {
		super(props);
		
		this.state = {
			loading: true,
			comments: [],
			}
	}
	
	
	//метод для отрисовки жизненного цикла компонента из бэкенда
	componentDidMount() {
		const { match } = this.props;		
		//отправляется ajax запрос
		fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
		//возвращается ajax запрос
		.then((response) => response.json())
		.then((comment) => {
			this.setState({
				loading: false,
				comment,
			});
		});
	}
	
	render() {
		const {comment, loading } = this.state;
		
		return(
			loading ? 'Loading' : <Comment author={comment.name} message={comment.body} />
		)
	}
}