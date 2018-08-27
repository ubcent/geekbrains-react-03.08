import {createAction} from 'redux-actions';

export const load = (dispatch) => {
    dispatch(loadStart());
    fetch('http://localhost:8080/src/json/profiles.json')
        .then((response) => response.json())
        .then(
            (users) => {
                dispatch(loadComplete(users));
                dispatch(reverseList(users));
            },
            () => {
                dispatch(loadFail());
            });
};

export const loadStart = createAction('[Users] Load Start');
export const loadComplete = createAction('[Users] Load Complete');
export const loadFail = createAction('[Users] Load Fail');
export const reverseList = createAction('[Users] Reverse List');


// http://localhost:8080/src/json/profiles.json