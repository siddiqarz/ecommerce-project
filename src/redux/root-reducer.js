/*Base reducer obj that represents all the states in application. All the reducers will go here*/
import {combineReducers} from 'redux';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //actual local storage, also there's sessionStorage
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //only reducer we want to persist
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer

});

export default persistReducer(persistConfig, rootReducer)