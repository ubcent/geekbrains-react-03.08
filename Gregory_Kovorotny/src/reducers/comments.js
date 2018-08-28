import { handleActions } from 'redux-actions';
import { loadStart, loadComplete, loadFail } from 'actions/comments';

const initialState = {
  loading: false,
  entities: [],
}

export default handleActions({
  [loadStart]: (state) => {
    return ({
      ...state,
      loading: true,
    });
  },
  [loadComplete]: (state, action) => {
    return ({
      loading: false,
      entities: action.payload
        .map((comment) => ({ // map лучше здесь (в reducers) делать, или в actions ?
          id: comment.id,
          author: comment.name,
          message: comment.body,
          postId: comment.postId
        })),
    });
  },
  [loadFail]: (state, action) => {
    return ({
      loading: false,
      entities: [],
    });
  },
}, initialState);
