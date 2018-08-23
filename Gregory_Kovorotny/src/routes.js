import Page404 from 'components/Page404';
import About from 'components/About';
import PostViewContainer from 'containers/PostViewContainer';
import BloggerViewContainer from 'containers/BloggerViewContainer';
import PostsListContainer from 'containers/PostsListContainer';
import BloggersListContainer from 'containers/BloggersListContainer';
import CommentsListContainer from 'containers/CommentsListContainer';

export default [
  {
    component: About,
    exact: true,
    path: '/',
  },
  {
    component: PostViewContainer,
    exact: true,
    path: '/post/:postId',
  },
  {
    component: BloggerViewContainer,
    exact: true,
    path: '/blogger/:userId',
  },
  {
    component: PostsListContainer,
    exact: true,
    path: '/posts',
  },
  {
    component: PostsListContainer,
    exact: true,
    path: '/posts/:userId',
  },
  {
    component: BloggersListContainer,
    exact: true,
    path: '/bloggers',
  },
  {
    component: CommentsListContainer,
    exact: true,
    path: '/comments',
  },
  {
    component: CommentsListContainer,
    exact: true,
    path: '/comments/:userId',
  },
]
