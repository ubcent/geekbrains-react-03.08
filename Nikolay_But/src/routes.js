import CommentsListContainer from 'containers/CommentsListContainer';
import CommentContainer from 'containers/CommentContainer';
import HomePage from 'components/HomePage';
import BlogsContainer from 'containers/BlogsContainer';
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
    component: BlogsContainer,
    exact: true,
    path: '/blogs/',
  },
  {
    component: BlogContainer,
    exact: true,
    path: '/blogs/:id',
  },
];