import isAuthReducer from "./isAuth";
import counter from "./counter";

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    isAuth: isAuthReducer,
    count: counter
})

export default rootReducers
