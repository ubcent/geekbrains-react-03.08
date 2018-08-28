import { combineReducers } from 'redux';
import commentsReducer from './comments';
import postsReducer from './posts';
import usersReducer from './users';

export default combineReducers({
    comments: commentsReducer,
    posts: postsReducer,
    users: usersReducer,
});