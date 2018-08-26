import { createAction } from 'redux-actions';

export const load = (dispatch) => {
  dispatch(loadStart());
  // fetch('https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10')
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(
      (blogs) => {
        dispatch(loadComplete(blogs));
      },
      () => {
        dispatch(loadFail());
      }
    );
}

export const loadStart = createAction('[Blogs] Load Start');
export const loadComplete = createAction('[Blogs] Load Complete');
export const loadFail = createAction('[Blogs] Load Fail');