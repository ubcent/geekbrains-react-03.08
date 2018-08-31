import { combineReducers } from 'redux';
import commentsReducer from './comments';
import blogsReducer from './blogs';

export default combineReducers({
  comments: commentsReducer,
  blogs: blogsReducer,
});