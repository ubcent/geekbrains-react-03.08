import {handleActions} from 'redux-actions';
import {loadStart, loadComplete, loadFail} from "actions/posts";

const initialState = {
    loading: true,
    entities: [],
};

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
            entities: action.payload.map((post) => ({
                id: post.id,
                title: post.title,
                text: post.body,
            }))
        }
    },
    [loadFail]: (state, action) => {
        return {
            loading: true,
            entities: [],
        }
    }
}, {initialState});