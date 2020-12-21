import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Redirect, Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {
 

  unsubscribeFromAuth = null  

  componentDidMount(){
    const {setCurrentUser} = this.props;

    //this is an open subscription connection is always open as long as app component is mounted on DOM. 
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
     setCurrentUser(userAuth);
    })
  }

  //close subscription from firebase to prevent memory leaks
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/checkout' component={CheckoutPage}/>
      <Route path='/signIn' render={()=> this.props.currentUser? (<Redirect to='/'/>): (<SignInSignUpPage/>)}/>
      </Switch>
    </div>
);
}
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
