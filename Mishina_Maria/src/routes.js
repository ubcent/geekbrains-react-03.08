import Home from 'components/Home';
import BlogListContainer from 'containers/BlogListContainer';
import CommentsListContainer from 'containers/CommentsListContainer';
import UsersListContainer from 'containers/UsersListContainer';
import PostContainer from 'containers/PostContainer';

export default [
    {
        component: Home,
        exact: true,
        path: '/',
    },
    {
        component: BlogListContainer,
        exact: true,
        path: '/blog',
    },
    {
        component: CommentsListContainer,
        exact: true,
        path: '/comments',
    },
    {
        component: UsersListContainer,
        exact: true,
        path: '/users',
    },
    {
        component: PostContainer,
        exact: true,
        path: '/blog/:id',
    }
];