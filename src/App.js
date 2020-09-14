import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null  

  componentDidMount(){
    //this is an open subscription connection is always open as long as app component is mounted on DOM. 
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user})
    })
  }

  //close subscription from firebase to prevent memory leaks
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signIn' component={SignInSignUpPage}/>
      </Switch>
    </div>
);
}
}

export default App;
