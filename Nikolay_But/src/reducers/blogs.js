import { handleActions } from 'redux-actions';
import { loadStart, loadComplete, loadFail } from 'actions/blogs';

const initialState = {
  loading: false,
  entities: [],
}

export default handleActions({
  [loadStart]: (state) => {
    return {
      ...state,
      loading: true,
    }
  },
  [loadComplete]: (state, action) => {
    return {
      loading: false,
      entities: action.payload
        .map((blog) => ({
          id: blog.id,
          title: blog.title,
          body: blog.body
        })),
    };
  },
  [loadFail]: (state, action) => {
    return {
      loading: false,
      entities: [],
    };
  }
}, initialState);