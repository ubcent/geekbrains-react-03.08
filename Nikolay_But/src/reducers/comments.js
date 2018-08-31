import { handleActions } from 'redux-actions';
import { loadStart, loadComplete, loadFail } from 'actions/comments';

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
        .map((comment) => ({
          id: comment.id,
          author: comment.name,
          message: comment.body
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