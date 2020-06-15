// this is the root reducer
// when you link a folder (in import), it looks for index.js, which is a special file name in JS

import { combineReducers } from "redux";
// import all the reducer files
import userReducer from "./userReducer";

export default combineReducers({
    users: userReducer
})