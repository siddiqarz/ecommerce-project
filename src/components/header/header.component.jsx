import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import  Logo from '../../assets/crown.svg';
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({currentUser, hidden}) => (
  <div className="header">
    <Link to="/">
      <img src={Logo} alt='Logo' className='logo-container'/>
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
      {
        currentUser ?
        <div className='option' onClick = {() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
     <CartIcon/>
    </div>
    {hidden ? null : <CartDropdown/>}
  </div>
); 

//destructuring off the state, nested values
// const mapStateToProps = ({user: {currentUser}, cart: {hidden}})=> ({
//   currentUser,
//   hidden
// )};

//createStructuredSelector passes the state into selectors
const mapStateToProps = createStructuredSelector({
currentUser: selectCurrentUser,
hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);