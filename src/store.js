// This is where state is
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

// takes in rootReducer, intialState, composer
const store = createStore(
    rootReducer, initialState, compose(
        applyMiddleware(...middleware))
);

export default store;

// action - payloads of data used by reducer
// javascript object used by reducer

// reducer is where logic of function is ran - redux function that changes state

// dispatch is the event that triggers a redux function to run

// action types - string values for the actions

// action creator - function that creates the action (action.type = "delete user" payload: user.id )

// reduce thunk - function that is returned by another function

// mapStateToProps - take state from redux and make it available as props

// addDispatchToProps - give react components access to redux functions