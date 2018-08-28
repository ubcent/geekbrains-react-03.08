import {createAction} from 'redux-actions';

export const load = (dispatch) => {
    dispatch(loadStart());
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((response) => response.json())
        .then((posts) => {
                dispatch(loadComplete(posts))
            },
            () => {
                dispatch(loadFail())
            });
};

export const loadStart = createAction('[Posts] Load Start');
export const loadComplete = createAction('[Posts] Load Complete');
export const loadFail = createAction('[Posts] Load Fail');