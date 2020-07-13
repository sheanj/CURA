import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import LoginPopUp from '../Login/LoginPopUp';
import UserRegisterPopUp from '../Login/UserRegisterPopUp';
import TextInput from '../TimeLine/InputForms/TextInput'




export default class Main extends Component {
  render() {
    const { handleLogin, handleRegister } = this.props;
    return (
      <div>
        <Header />
        <Route path='/' render={(props) => (
          <LoginPopUp
            {...props}
            handleLogin={handleLogin}
          />
          )}
        />
        <Route path='/' render={(props) => (
          <UserRegisterPopUp
            {...props}
            handleRegister={handleRegister}
          />
        )} 
        />
        <Route path='/test' exact render={(props) => (
          <TextInput />
        )} 
        />
      </div>
    )
  }
}
