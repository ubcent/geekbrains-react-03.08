import { handleActions } from 'redux-actions';
import { load, loadComplete, loadFail } from 'actions/comments';

const initialState = {
  loading: false,
  entities: [],
}

export default handleActions({
  [load]: (state, action) => {
    return ({
      loading: false,
      entities: [{
        id: 1,
        author: 'Vasya',
        message: 'Test message reducer',
        postId: 1,
      }],
    });
  }
}, initialState);
