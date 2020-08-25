import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.js'
import Header from './components/header/header.js'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.js'
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'
import { setCurrentUser } from './redux/user/actions.js'

class App extends Component  {

  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props



    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapShot(snapShot => {
           setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth( )
  }

  render() {
    return (
      <div>
      <Header />
       <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
       </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
