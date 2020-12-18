import counterReducer from "./counter";
import loggedReducer from "./isLoged";
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    counter : counterReducer,
    islogged : loggedReducer
});

export default (allReducer);