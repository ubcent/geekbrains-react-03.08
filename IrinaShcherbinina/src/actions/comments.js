import { createAction } from 'redux-actions';

export const load = (dispatch) => {
	dispatch(loadStart());
	fetch('https://jsonplaceholder.typicode.com/comments')
		.then((response) => response.json())
		.then(
	(comments) => {
	    dispatch(loadComplete(comments));
	},
	() => {
	    dispatch(loadFail());
	}
	);
}
export const loadStart = createAction('[Comments] Load Start');
export const loadComplete = createAction('[Comments] Load Comlete');
export const loadFail = createAction('[Comments] Load Fail');
