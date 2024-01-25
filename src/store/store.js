import {combineReducers,createStore} from 'redux';
import todoReducer from './reducers/todoReducer';
import counterReducer from './reducers/counterReducer';
const reducer = combineReducers({c:counterReducer,t:todoReducer})
const store = new createStore(reducer);
export default store;