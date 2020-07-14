import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import LoginPopUp from '../Login/LoginPopUp';
import UserRegisterPopUp from '../Login/UserRegisterPopUp';
import TextInput from '../TimeLine/InputForms/TextInput'
import Landing from '../Landing/Landing'
import UserTimeLine from '../TimeLine/UserTimeLine/UserTimeLine';




export default class Main extends Component {
  render() {
    const { handleLogin, handleRegister, handleLogout } = this.props;
    return (
      <div>
        <Header
          handleLogout={handleLogout}
        />
        <Route path='/login' render={(props) => (
          <LoginPopUp
            {...props}
            handleLogin={handleLogin}
          />
          )}
        />
        <Route exact path='/register'  render={(props) => (
          <UserRegisterPopUp
            {...props}
            handleRegister={handleRegister}
          />
        )} 
        />
        <Route exact path='/test'  render={(props) => (
          <TextInput />
        )} 
        />
        <Route exact path='/'  render={(props) => (
          <Landing />
        )} 
        />
        <Route exact path='/timeline'  render={(props) => (
          <UserTimeLine />
        )} 
        />
      </div>
    )
  }
}
