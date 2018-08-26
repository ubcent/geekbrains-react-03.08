import { createStore }  from 'redux';
import rootReducer from 'reducers';

//в createStore  будем передавать reducers
export default createStore(rootReducer);
	   