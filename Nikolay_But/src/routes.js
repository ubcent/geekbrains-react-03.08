import CommentsListContainer from 'containers/CommentsListContainer';
import CommentContainer from 'containers/CommentContainer';
import HomePage from 'components/HomePage';

export default [
  {
    component: HomePage,
    exact: true,
    path: '/',
  },
  {
    component: CommentsListContainer,
    exact: true,
    path: '/comments',
  },
  {
    component: CommentContainer,
    exact: true,
    path: '/comments/:id',
  },
];