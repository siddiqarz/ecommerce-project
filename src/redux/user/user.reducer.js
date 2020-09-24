/*A reducer is just a function that gets two properties:
 A state object that represents last/initial state (which redux store passes to reducer)
 and receives an action which is just an object that has a 
type(of a string value, named whatever we want) and it might or might not have payload. 
Payload can be anything. We can do something with it to update the state or make transformations. It;s a flexible property gotten on action object*/

import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
        return{
            ...state,
            currentUser: action.payload
        }
    default:
      return state;
  }
};

export default userReducer;
