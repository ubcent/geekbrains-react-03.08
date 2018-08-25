import CommentsList from 'containers/CommentsListContainer';
import Comment from 'containers/CommentContainer';
import HomePage from 'components/HomePage';

export default [
	{
		component: HomePage,
		exact: true,
		path: '/',
	},
	{
		component: CommentsList,
		exact: true,
		path: '/comments',
	},
	{
		component: Comment,
		exact: true,
		path: '/comments/:id',
	}
	
]