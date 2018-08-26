import CommentsListContainer from 'containers/CommentsListContainer';
import CommentContainer from 'containers/CommentContainer';
import HomePage from 'components/HomePage';
import BlogsListContainer from 'containers/BlogsListContainer';
import BlogContainer from 'containers/BlogContainer';

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
  {
    component: BlogsListContainer,
    exact: true,
    path: '/blogs/',
  },
  {
    component: BlogContainer,
    exact: true,
    path: '/blogs/:id',
  },
];