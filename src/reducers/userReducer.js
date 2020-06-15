import { DELETE_USER, CREATE_USER } from "../actions/actionTypes";


const initialState = {
  users: [
    {
      name: "Aaron",
      id: 1,
    },
    {
      name: "Jamie",
      id: 2,
    },
  ],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case DELETE_USER:
      let filteredArray = state.users.filter((user) => {
        if (user.id !== action.payload) {
          return user;
        }
      });
      return {
        ...state,
        users: filteredArray
      }
      case CREATE_USER:
        let newUserArray = [...state.users, action.payload.data]
        return {
          ...state,
          users: newUserArray
        }
    default:
      return state;
  }
}