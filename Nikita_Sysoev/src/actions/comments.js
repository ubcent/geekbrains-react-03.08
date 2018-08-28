import {createAction} from 'redux-actions';

export const load = (dispatch) => {
    dispatch(loadStart());
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
        .then((response) => response.json())
        .then(
            (comments) => {
                dispatch(loadComplete(comments))
            },
            () => {
                dispatch(loadFail());
            });
};

export const loadStart = createAction('[Comments] Load Start');
export const loadComplete = createAction('[Comments] Load Complete');
export const loadFail = createAction('[Comments] Load Fail');