//functions that return objects in correct format
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})