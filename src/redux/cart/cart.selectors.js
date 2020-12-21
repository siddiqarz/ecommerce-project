import {createSelector} from 'reselect';

const selectCart = state => state.cart;

//takes in an array of selectors and function argument takes in what selector returns, so cart reducer in this case
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItems =>
    cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce((accumulatedQuantity, cartItem ) => accumulatedQuantity + (cartItem.price*cartItem.quantity), 0)
)