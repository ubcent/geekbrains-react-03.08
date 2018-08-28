import { createAction } from 'redux-actions';

export const load = (dispatch, userId) => {
  console.log(userId);
  // dispatch(loadStart());
  fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((response) => response.json())
    .then(
      (comments) => {
        if (typeof userId !== 'undefined') {
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => response.json())
            .then((posts) => {
              const userPostsIds = posts.map((post) => post.id)
              dispatch(loadComplete(comments.filter((comment) => userPostsIds.includes(comment.postId))));
            });
        } else {
          const postsCount = parseInt(Math.random() * 15);
          console.log(postsCount);
          dispatch(loadComplete(comments.filter((comment) => (comment.postId < postsCount))));
        }
      },
      () => {
        dispatch(loadFail());
      }
    );
}

export const loadStart = createAction('[Comments] Load Start');
export const loadComplete = createAction('[Comments] Load Complete');
export const loadFail = createAction('[Comments] Load Fail');
