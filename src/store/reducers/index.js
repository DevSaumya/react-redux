import isAuthReducer from "./isAuth";
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    isAuth: isAuthReducer
})

export default rootReducers
