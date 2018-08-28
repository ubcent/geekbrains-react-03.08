import { createAction } from 'redux-actions';

export const load = createAction('[Comments] Load');
export const loadComplete = createAction('[Comments] Load Complete');
export const loadFail = createAction('[Comments] Load Fail');
