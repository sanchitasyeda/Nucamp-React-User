import { DELETE_USER, CREATE_USER } from "./actionTypes";

export function deleteUser(id) {
    return function(dispatch) {
        dispatch({
            type: DELETE_USER,
            payload: id,
        })
    }
}

export function createUser(data) {
    return function(dispatch) {
        dispatch({
            type: CREATE_USER,
            payload: {data},
        })
    }
}