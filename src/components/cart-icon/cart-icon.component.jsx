import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon}  from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


const CartIcon = ({toggleCartHidden, itemQuantity}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemQuantity}</span>
    </div>
)
const mapStateToProps = state => ({
itemQuantity: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);