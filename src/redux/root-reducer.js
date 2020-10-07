/*Base reducer obj that represents all the states in application. All the reducers will go here*/
import {combineReducers} from 'redux';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

export default combineReducers ({
    user: userReducer,
    cart: cartReducer
});